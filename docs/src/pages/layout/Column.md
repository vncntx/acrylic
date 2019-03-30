## Column

A **Column** lays out its children in a single column.

```jsx
render(() => (
	<Column>
		<Card>
			<Image src="/img/art1.webp" />
		</Card>
		<Card>
			<Image src="/img/art2.webp" />
		</Card>
		<Card>
			<Image src="/img/art3.webp" />
		</Card>
	</Column>
))
```

This component is a [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) container. The following flex options are supported (all are optional). The `reverse` prop sets the [flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction) to `column-reverse`. The `inline` prop makes the Column itself behave like an inline element while preserving the layout of its children. The `alignItems`, `alignContent`, and `justify` props control how children are laid out, while the `alignSelf` prop controls how the Column is aligned when inside another Row or Column.

| Prop          | Type          |
|---------------|---------------|
| reverse       | boolean       |
| inline        | boolean       |
| alignSelf     | (start, end, stretch, center, baseline) |
| alignItems    | (start, end, stretch, center, baseline) |
| alignContent  | (start, end, stretch, center, between, around, even) |
| justify       | (start, end, stretch, center, between, around, even) |

###### Documentation
- [`Column`](/wiki/modules/_components_layout_column_.html)
