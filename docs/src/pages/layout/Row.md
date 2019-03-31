## Row

A **Row** lays out its children in a single row.

```jsx
render(() => (
	<Row>
		<Card classes="medium">
			<Image src="/img/art1.webp" />
		</Card>
		<Card classes="medium">
			<Image src="/img/art2.webp" />
		</Card>
		<Card classes="medium">
			<Image src="/img/art3.webp" />
		</Card>
	</Row>
))
```

This component is a [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) container. The following flex options are supported (all are optional). The `reverse` prop sets the [flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction) to `row-reverse`. The `inline` prop makes the Row itself behave like an inline element while preserving the layout of its children. The `alignItems`, `alignContent`, and `justify` props control how children are laid out, while the `alignSelf` prop controls how the Row is aligned when inside another Row or Column.

| Prop          | Type          |
|---------------|---------------|
| reverse       | boolean       |
| inline        | boolean       |
| alignSelf     | (start, end, stretch, center, baseline) |
| alignItems    | (start, end, stretch, center, baseline) |
| alignContent  | (start, end, stretch, center, between, around, even) |
| justify       | (start, end, stretch, center, between, around, even) |

###### Documentation
- [`Row`](/wiki/modules/_components_layout_row_.html)
