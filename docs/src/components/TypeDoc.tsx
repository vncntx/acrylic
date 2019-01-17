import * as React from "react";
import { ProjectReflection, DeclarationReflection } from "typedoc";
import { Redirect, generatePath } from "react-router";

const { useState, useEffect } = React;

export interface ITypeDocProps {
	src: string;
	target: string;
}

export default function TypeDoc(props: ITypeDocProps) {
	const contentUrl = props.src;
	const [types, setTypes] = useState(null as ProjectReflection);
	const [hasError, setError] = useState(false);

	useEffect(
		() => {
			const abortController = new AbortController();
			if (contentUrl.length > 0) {
				fetch(contentUrl, {
					signal: abortController.signal
				})
					.then(res => {
						if (res.status < 200 || res.status > 299) {
							setError(true);
						} else {
							res.text().then(contents => {
								setTypes(JSON.parse(contents));
							});
						}
					})
					.catch((err: Error) => {
						if (
							!(
								err instanceof DOMException &&
								err.code == DOMException.ABORT_ERR
							)
						) {
							setError(true);
						}
					});
				return () => abortController.abort();
			}
		},
		[contentUrl]
	);

	if (!types) {
		return <p>Nothing</p>;
	}

	const targetDoc = findReflectionByName(props.target, types.children);

	if (!targetDoc) {
		return (
			<Redirect
				to={generatePath("/error/:message/:details?", {
					message: "Missing Information",
					details: `We couldn't find information about the type or module ${
						props.target
					}`
				})}
			/>
		);
	}

	return (
		<section>
			<p>Name: {targetDoc.name}</p>
			<p>{targetDoc.comment}</p>
			<p>Kind: {targetDoc.kindString}</p>
			<p>Signatures:</p>
			<ul>
				{targetDoc.signatures.map(signature => {
					return (
						<li key={signature.id}>
							{signature.name}(
							{signature.parameters.map((param, i) => {
								return (
									<span>
										{param.name}
										{i > 0 ? ", " : ""}: {param.type["name"]}
									</span>
								);
							})}
							)
						</li>
					);
				})}
			</ul>
			<p>Properties: {targetDoc.signatures[0].parameters[0].type["name"]}</p>
			<p>
				{
					findReflectionById(
						targetDoc.signatures[0].parameters[0].type["id"],
						types.children
					).kindString
				}
			</p>
		</section>
	);
}

/**
 * Recursively search for a type or module's reflection
 * @param name The name of the type/module to search for
 * @param reflections The list of reflections to search in
 */
function findReflectionByName(
	name: string,
	reflections?: DeclarationReflection[]
): DeclarationReflection | null {
	if (!reflections || reflections.length < 1) {
		return null;
	}
	const [head, ...tail] = reflections;
	if (head.name === name) {
		return head;
	}
	return (
		findReflectionByName(name, head.children) ||
		findReflectionByName(name, tail)
	);
}
/**
 * Recursively search for a type or module's reflection by id
 * @param id The id of the type/module to search for
 * @param reflections The list of reflections to search in
 */
function findReflectionById(
	id: number,
	reflections?: DeclarationReflection[]
): DeclarationReflection | null {
	if (!reflections || reflections.length < 1) {
		return null;
	}
	const [head, ...tail] = reflections;
	if (head.id === id) {
		return head;
	}
	return findReflectionById(id, head.children) || findReflectionById(id, tail);
}
