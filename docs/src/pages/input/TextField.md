## TextField

A **TextField** is an input element for text and has several variants. Its default type is _text_, but also supports _email_ and _password_. You can specify an optional label, placeholder, or comment; or declare the field to be required, invalid or disabled.

```jsx
render(() => (
	<Section>
		<TextField label="TextField" />
		<TextField label="Email" type="email" />
		<TextField label="Password" type="password" />
		<TextField label="Required" required />
		<TextField label="Primary" variant="primary" />
		<TextField label="Success" variant="success" />
		<TextField label="Warning" variant="warning" />
		<TextField label="Danger" variant="danger" />
		<TextField label="Disabled" disabled />
		<TextField label="TextField" placeholder="Placeholder" />
		<TextField label="Invalid" invalid comment="This field has an error" />
		<TextField label="Comment" variant="success" comment="This field is correct" />
	</Section>
))
```

If the field is read-only, it is rendered without borders and shadows.

```jsx
render(() => (
	<Section>
		<TextField readOnly label="Label" value="Value" />
		<TextField readOnly label="Invalid" value="Value" invalid comment="This field has errors" />
		<TextField readOnly label="Correct" value="Value" variant="success" comment="This field is correct" />
	</Section>
))
```
