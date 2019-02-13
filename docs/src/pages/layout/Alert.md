## Alert

An **Alert** draws attention to a small piece of content. Several variants are available to provide contextual information to the user. They can be dismissed using a button.

```jsx
render(() => (
	<div>
		<Alert>This is an Alert</Alert>
		<Alert variant="primary">This is a Primary Alert</Alert>
		<Alert variant="success">This is a Success Alert</Alert>
		<Alert variant="warning">This is a Warning Alert</Alert>
		<Alert variant="danger">This is a Danger Alert</Alert>
	</div>
))
```

You can also customize the control button at the end

```jsx
const CloseButton = (onDismiss) => (
	<IconButton onClick={onDismiss}>
		<Icon src="/img/cancel.svg" />
	</IconButton>
)

render(() => (
	<Alert controlComponent={CloseButton}>This one has a custom Button</Alert>
))
```

###### Documentation

- [`Alert`](/wiki/modules/_components_layout_alert_.html)
- [`Variant`](/wiki/modules/_components_variant_.html)
