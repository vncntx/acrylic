## Button

A **Button** is a basic control that allows the user to interact via clicks and taps.

```jsx
render(() => (
	<div>
		<Button>Button</Button>
		<Button variant="primary">Primary</Button>
		<Button variant="success">Success</Button>
		<Button variant="warning">Warning</Button>
		<Button variant="danger">Danger</Button>
		<Button disabled>Disabled</Button>
	</div>
))
```

Buttons can also contain **[Icons](/components/typography/Icon)**.

```jsx
render(() => (
	<div>
		<Button><Icon src="/img/ok.svg" />Okay</Button>
		<Button><Icon src="/img/cancel.svg" />Cancel</Button>
		<Button><Icon src="/img/about.svg" />About</Button>
	</div>
))
```

Use an **IconButton** if you don't need to display text.

```jsx
render(() => (
	<div>
		<IconButton src="/img/ok.svg" />
		<IconButton src="/img/cancel.svg" />
		<IconButton src="/img/about.svg" />
	</div>
))
```

###### Documentation
- [`Button`](/wiki/modules/_components_controls_button_.html)
- [`IconButton`](/wiki/modules/_components_controls_iconbutton_.html)
- [`Variant`](/wiki/modules/_components_variant_.html)
