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

You can also customize the button, or control it programatically using the `isDismissed` prop.

```jsx
const CloseButton = (props) => (
	<IconButton {...props} src="/img/cancel.svg" />
)

render(() => (
	<React.Fragment>
		<Alert>
			This one has a custom Button
			<CloseButton />
		</Alert>
		
		<Alert isDismissed={true}>This one has been dismissed</Alert>
	</React.Fragment>
))
```

###### Documentation

- [`Alert`](/wiki/modules/_components_layout_alert_.html)
- [`Variant`](/wiki/modules/_components_variant_.html)
