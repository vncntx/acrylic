## Switch

A **Switch** allows the user to turn something on or off. Use it in place of a Checkbox when the effect needs to be immediate.


```jsx
render(() => (
	<Section>
		<Switch label="Switch" on />
		<Switch label="Disabled" disabled />
		<Switch label="Primary" variant="primary" />
		<Switch label="Success" variant="success" />
		<Switch label="Warning" variant="warning" />
		<Switch label="Danger" variant="danger" />
		<Switch label="Invalid" invalid comment="This field has an error" />
		<Switch label="Comment" variant="success" comment="This field is correct" />
	</Section>
))
```

It can also be `readOnly`.

```jsx
render(() => (
	<Section>
		<Switch readOnly on label="Checkbox" />
		<Switch readOnly on label="Invalid" invalid comment="This field has errors" />
		<Switch readOnly on label="Correct" variant="success" comment="This field is correct" />
	</Section>
))
```

###### Documentation

- [`Switch`](/wiki/modules/_components_input_switch_.html)
