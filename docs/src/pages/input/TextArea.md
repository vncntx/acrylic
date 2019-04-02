## TextArea

A **TextArea** is an input element for large bodies of text.

```jsx
render(() => (
	<Section>
		<TextArea label="TextField" />
		<TextArea label="Required" required />
		<TextArea label="Disabled" disabled />
		<TextArea label="Success" variant="success" />
		<TextArea label="Warning" variant="warning" />
		<TextArea label="Danger" variant="danger" />
		<TextArea label="TextField" placeholder="Placeholder" />
		<TextArea label="Invalid" invalid comment="This field has an error" />
		<TextArea label="Comment" variant="success" comment="This field is correct" />
	</Section>
))
```

If the field is read-only, it is rendered without borders and shadows.

```jsx

const lorem = "A legendary creature that appears in the folklore of many cultures around the world. Beliefs about dragons vary drastically by region, but dragons in western cultures since the High Middle Ages have often been depicted as winged, horned, four-legged, and capable of breathing fire. Dragons in eastern cultures are usually depicted as wingless, four-legged, serpentine creatures with above-average intelligence."

render(() => (
	<Section>
		<TextArea readOnly label="Label" value={lorem} />
		<TextArea readOnly label="Invalid" value={lorem} invalid comment="This field has errors" />
		<TextArea readOnly label="Correct" value={lorem} variant="success" comment="This field is correct" />
	</Section>
))
```

###### Documentation

- [`TextArea`](/wiki/modules/_components_input_textarea_.html)
