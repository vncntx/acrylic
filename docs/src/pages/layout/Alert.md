## Alert

[wiki]: /wiki/modules/_components_layout_alert_.html

An Alert draws attention to a small piece of content. Several variants are available to provide contextual information to the user. They can be dismissed using a button.

```jsx
render(() => (
	<div>
		<Alert>Alert</Alert>
		<Alert variant="primary">Primary</Alert>
		<Alert variant="success">Success</Alert>
		<Alert variant="info">Info</Alert>
		<Alert variant="warning">Warning</Alert>
		<Alert variant="danger">Danger</Alert>
	</div>
))
```

The control component can also be set.

```jsx

const CloseButton = (onDismiss) => (
	<IconButton onClick={onDismiss}>
		<Icon src="/src/img/cancel.svg" />
	</IconButton>
)

render(() => (
	<Alert controlComponent={CloseButton}>Custom</Alert>
))
```
