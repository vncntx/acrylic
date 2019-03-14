## Dropdown

A **Dropdown** menu is toggled by a Button. It can be controlled using the `isOpen` prop.

```jsx
render(() => (
	<Dropdown>
		<Button>Dropdown</Button>
		<Menu>
			<MenuItem>Cut</MenuItem>
			<MenuItem>Copy</MenuItem>
			<MenuItem>Paste</MenuItem>
			<Divider />
			<MenuItem>Undo</MenuItem>
			<MenuItem disabled>Redo</MenuItem>
		</Menu>
	</Dropdown>
))
```

###### Documentation

- [`Dropdown`](/wiki/modules/_components_controls_dropdown_.html)
