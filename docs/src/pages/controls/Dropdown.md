## Dropdown

A **Dropdown** is a floating menu toggled by a button. It can be controlled programatically using the `isOpen` prop.

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
- [`Menu`](/wiki/modules/_components_layout_menu_.html)
