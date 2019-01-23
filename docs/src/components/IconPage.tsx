import * as React from "react";
import { Title, Text, Section, Row, Icon, Emblem } from "../../../lib/acrylic";
import { parse } from "querystring";

const { useState, useEffect } = React;

export default function IconPage() {
	const codes = [];
	const [meaningful, setMeaningful] = useState([]);
	const [clicked, setClicked] = useState(new Map());

	const emblems = Object.keys(Emblem).filter(value => isNaN(Number(value)));

	return (
		<Section classes="article">
			<Title level={2}>Icon</Title>
			<Text>Icon displays an image as a small square icon.</Text>
			<table>
				<tr>
					<th>Emblem</th>
					<th>Name</th>
				</tr>
				{emblems.map(e => (
					<tr key={e}>
						<td>
							<Icon>{Emblem[e]}</Icon>
						</td>
						<td>{e}</td>
					</tr>
				))}
			</table>
		</Section>
	);
}
