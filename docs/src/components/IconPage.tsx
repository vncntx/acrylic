import * as React from "react";
import {
	Title,
	Text,
	Section,
	Row,
	Toolbar,
	Button,
	Icon,
	Emblem,
	Alert
} from "../../../lib/acrylic";

const { useState } = React;

export default function IconPage() {
	const [filter, setFilter] = useState("");

	const emblems = Object.keys(Emblem).filter(value => isNaN(Number(value)));

	return (
		<Section classes="article">
			<Title level={2}>Icon</Title>
			<Text>
				Icon displays an image that scales with the current font size. To use
				it, you can either:
			</Text>
			<Alert variant="warning">
				<Icon src="/src/img/info.svg" />
				This component will be reworked for better portability
			</Alert>
			<ol className="enumeration">
				<li>
					use one of the built-in{" "}
					<a href="/wiki/enums/_components_typography_icon_.emblem.html">
						Emblems
					</a>{" "}
					mapped to the{" "}
					<a href="https://docs.microsoft.com/en-us/windows/uwp/design/style/segoe-ui-symbol-font">
						Segoe MDL2 Assets
					</a>{" "}
					font;
				</li>
				<li>
					provide your own image;{" "}
					<a href="https://icons8.com/icons/windows">Icons8</a> has a nice
					selection
				</li>
			</ol>
			<Text>
				Read more about custom web fonts&nbsp;
				<a href="https://www.w3schools.com/cssref/css3_pr_font-face_rule.asp">
					here
				</a>
				.
			</Text>
			<Toolbar>
				<a href="/wiki/modules/_components_typography_icon_.html">
					<Button>
						<Icon>{Emblem.Details}</Icon>Details
					</Button>
				</a>
				<a href="https://1drv.ms/u/s!AhyGTJUAa-UL9x3FmuiEAvMYb3jm">
					<Button>
						<Icon>{Emblem.Download}</Icon>Download Font
					</Button>
				</a>
			</Toolbar>
			<input
				className="search-box"
				type="text"
				value={filter}
				onChange={e => setFilter(e.target.value)}
				placeholder="Type to filter"
			/>
			<Row classes="emblem-grid">
				{emblems
					.filter(e => e.search(new RegExp(filter, "gi")) > -1)
					.map(e => (
						<Section
							elevation={1}
							key={e}
							onClick={() => {
								const target = document.getElementById(
									`emblem-name-${e}`
								) as HTMLInputElement;
								target.select();
								document.execCommand("copy");
							}}
						>
							<Icon>{Emblem[e]}</Icon>
							<input
								id={`emblem-name-${e}`}
								className="hidden"
								value={e}
								readOnly
							/>
							{e}
						</Section>
					))}
			</Row>
		</Section>
	);
}
