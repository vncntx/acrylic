## Text

**Text** displays its contents as a generic block of text. By default, it is rendered as a paragraph.

```jsx
render(() => (
	<div>
		<Text>Wizard</Text>
		<Text>Knight</Text>
		<Text>Rogue</Text>
	</div>
))
```

It can also be inline, bold, italic, or underlined.

```jsx
render(() => (
	<div>
		<Text inline bold>Bold </Text>
		<Text inline italic>Italic </Text>
		<Text inline underlined>Underlined </Text>
	</div>
))
```

###### Documentation
- [`Text`](/wiki/modules/_components_typography_text_.html)
