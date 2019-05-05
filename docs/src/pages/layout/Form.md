## Form

A **Form** is a layout container for input fields, displayed in a single column.

```jsx
render(() => (
	<Form>
		<TextField label="Email" type="email" />
		<Row>
			<TextField label="First Name" />
			<TextField label="Last Name" />
		</Row>
		<TextArea label="Message" />
		<Checkbox label="Subscribe to the newsletter" />
		<Button type="submit" variant="primary">Submit</Button>
	</Form>
))
```

###### Documentation
- [`Form`](/wiki/modules/_components_layout_form_.html)
