## Title

**Title** displays text as a heading with a level of importance from 1 to 6; the lowest level is also the default.

```jsx
render(() => (
	<div>
		<Title level={1}>Chapter</Title>
		<Title level={2}>Chapter</Title>
		<Title level={3}>Chapter</Title>
		<Title level={4}>Chapter</Title>
		<Title level={5}>Chapter</Title>
		<Title level={6}>Chapter</Title>
	</div>
))
```

It can also be inline, bold, italic, or underlined.

```jsx
render(() => (
	<div>
		<Title inline bold>Bold </Title>
		<Title inline italic>Italic </Title>
		<Title inline underlined>Underlined </Title>
	</div>
))
```

###### Documentation
- [`Title`](/wiki/modules/_components_typography_title_.html)
