## Section

A **Section** is a container for a specific part of an app or page.

```jsx
render(() => (
	<Section>
		<Title>Dragon</Title>
		<Text>A legendary creature.</Text>
	</Section>
))
```

Sections can have an elevation of up to 6. Use elevation to convey heirarchy and separation; draw the user's attention by using a higher elevation value.

```jsx
render(() => (
	<Row>
		<Section classes="square" elevation={1} />
		<Section classes="square" elevation={2} />
		<Section classes="square" elevation={3} />
		<Section classes="square" elevation={4} />
		<Section classes="square" elevation={5} />
		<Section classes="square" elevation={6} />
	</Row>
))
```

And they can be textured using the "acrylic" material.

```jsx
render(() => (
	<Section elevation={4} style={{
		background: "url('/img/painting.jpg')"
	}}>
		<Section elevation={5} acrylic>
			<Title>Dragon</Title>
			<Text>A legendary creature.</Text>
		</Section>
	</Section>
))
```

###### Documentation
- [`Section`](/wiki/modules/_components_layout_section_.html)
