## Section

A Section is a container for a specific part of an app or page.

```jsx
render(() => (
	<Section>
		<Title>Dragon</Title>
		<Text>A legendary creature.</Text>
	</Section>
))
```

Sections can have an elevation of up to 6. Use elevation to convey information heirarchy and separation; draw the user's attention by using a higher elevation value.

```jsx
render(() => (
	<Row style={{
		alignItems: "stretch",
		height: 120,
		width: 750,
		margin: "auto"
	}}>
		<Section elevation={1} />
		<Section elevation={2} />
		<Section elevation={3} />
		<Section elevation={4} />
		<Section elevation={5} />
		<Section elevation={6} />
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
