## Badge

A **Badge** is a short piece of text designed to grab the user's attention and provide additional information about the current context. It appears on the top right of its child(ren).

```jsx
render(() => (
	<Section classes="padded">
		<Badge content={25}>
			<Button>Button</Button>
		</Badge>
		<Badge variant="primary" content="25">
			<Text>Primary</Text>
		</Badge>
		<Badge variant="success" content={<>&#10003;</>}>
			<Text>Success</Text>
		</Badge>
		<Badge variant="warning" content="25">
			<Text>Warning</Text>
		</Badge>
		<Badge variant="danger" content="New">
			<Text>Danger</Text>
		</Badge>
	</Section>
))
```

###### Documentation

- [`Badge`](/wiki/modules/_components_typography_badge_.html)
- [`Variant`](/wiki/modules/_components_variant_.html)
