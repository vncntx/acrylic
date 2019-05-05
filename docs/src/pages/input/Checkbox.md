## Checkbox

A **Checkbox** is an input for a yes or no question.


```jsx
render(() => (
	<Section>
		<Checkbox label="Checkbox" />
		<Checkbox label="Required" required />
		<Checkbox label="Disabled" disabled checked />
		<Checkbox label="Primary" variant="primary" />
		<Checkbox label="Success" variant="success" />
		<Checkbox label="Warning" variant="warning" />
		<Checkbox label="Danger" variant="danger" />
		<Checkbox label="Invalid" invalid comment="This field has an error" />
		<Checkbox label="Comment" variant="success" comment="This field is correct" />
	</Section>
))
```

They can also be `readOnly`.

```jsx
render(() => (
	<Section>
		<Checkbox readOnly label="Checkbox" checked />
		<Checkbox readOnly label="Invalid" checked invalid comment="This field has errors" />
		<Checkbox readOnly label="Correct" checked variant="success" comment="This field is correct" />
	</Section>
))
```

###### Documentation

- [`Checkbox`](/wiki/modules/_components_input_checkbox_.html)
