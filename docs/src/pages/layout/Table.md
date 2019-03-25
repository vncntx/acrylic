## Table

Use the **Table** component to display data in a tabular format. A **TableSection** can be used to designate the table's _header_, _body_, or _footer_.

```jsx
render(() => (
	<Table elevation={1}>
		<TableSection part="header">
			<TableRow>
				<Cell heading>ID</Cell>
				<Cell heading>Star</Cell>
				<Cell heading>Designation</Cell>
				<Cell heading>Constellation</Cell>
			</TableRow>
		</TableSection>
		<TableSection part="body">
			<TableRow>
				<Cell heading>01</Cell>
				<Cell>Acamar</Cell>
				<Cell>θ Eridani A</Cell>
				<Cell>Eridanus</Cell>
			</TableRow>
			<TableRow>
				<Cell heading>02</Cell>
				<Cell>Acubens</Cell>
				<Cell>α Cancri Aa</Cell>
				<Cell>Cancer</Cell>
			</TableRow>
			<TableRow>
				<Cell heading>03</Cell>
				<Cell>Polaris</Cell>
				<Cell>α Ursae Minoris</Cell>
				<Cell>Ursa Minor</Cell>
			</TableRow>
			<TableRow>
				<Cell heading>04</Cell>
				<Cell>Pollux</Cell>
				<Cell>β Geminorum</Cell>
				<Cell>Gemini</Cell>
			</TableRow>
			<TableRow>
				<Cell heading>05</Cell>
				<Cell>Sirius</Cell>
				<Cell>α Canis Majoris A</Cell>
				<Cell>Canis Major</Cell>
			</TableRow>
		</TableSection>
	</Table>
))
```

###### Documentation

- [`Table`](/wiki/modules/_components_layout_table_.html)
- [`Cell`](/wiki/modules/_components_layout_table_.html#cell)
- [`TableRow`](/wiki/modules/_components_layout_table_.html#tablerow)
- [`TableSection`](/wiki/modules/_components_layout_table_.html#tablesection)
