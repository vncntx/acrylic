## Button

[wiki]: /wiki/modules/_components_controls_button_.html

A Button is a control that allows the user to interact via clicks and taps.

```jsx
render(() => (
	<div>
		<Button>Button</Button>
		<Button variant="primary">Primary</Button>
		<Button variant="success">Success</Button>
		<Button variant="info">Info</Button>
		<Button variant="warning">Warning</Button>
		<Button variant="danger">Danger</Button>
		<Button disabled>Disabled</Button>
	</div>
))
```

Buttons can also contain icons.

```jsx
render(() => (
	<div>
		<Button><Icon>{0xe8c6}</Icon>Cut</Button>
		<Button><Icon>{0xe8c8}</Icon>Copy</Button>
		<Button><Icon>{0xe77f}</Icon>Paste</Button>
	</div>
))
```

Use an **IconButton** if you don't need to display text.

```jsx
render(() => (
	<div>
		<IconButton><Icon>{0xe8c6}</Icon></IconButton>
		<IconButton><Icon>{0xe8c8}</Icon></IconButton>
		<IconButton><Icon>{0xe77f}</Icon></IconButton>
	</div>
))
```
