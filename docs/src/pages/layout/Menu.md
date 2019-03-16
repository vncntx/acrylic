## Menu

Use **Menu** to display lists of actionable items. Each item can act as a button or a link.

```jsx
render(() => {

	const [action, setAction] = React.useState("");

	const undo = () => setAction("Undo");
	const max = () => setAction("Maximize");
	const min = () => setAction("Minimize");
	const about = () => setAction("About");

	return (
		<Row>
			<Menu classes="medium">
				<a href="#"><MenuItem>Cut</MenuItem></a>
				<a href="#"><MenuItem>Copy</MenuItem></a>
				<a href="#"><MenuItem>Paste</MenuItem></a>
				<Divider />
				<MenuItem onClick={undo}>Undo</MenuItem>
				<MenuItem disabled>Redo</MenuItem>
				<Divider />
				<SubMenu>
					<MenuHeading>View</MenuHeading>
					<MenuItem onClick={max}>Maximize</MenuItem>
					<MenuItem onClick={min}>Minimize</MenuItem>
				</SubMenu>
				<MenuItem onClick={about}>About</MenuItem>
			</Menu>
			<Section>
				<Text>{action}</Text>
			</Section>
		</Row>
	)
})
```

###### Documentation

- [`Menu`](/wiki/modules/_components_layout_menu_.html)
- [`MenuItem`](/wiki/modules/_components_layout_menu_.html#menuitem)
- [`MenuHeading`](/wiki/modules/_components_layout_menu_.html#menuheading)
- [`SubMenu`](/wiki/modules/_components_layout_menu_.html#submenu)
