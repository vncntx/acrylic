## Nav

A **Nav** is a semantic container for navigation.

```jsx
render(() => (
	<Nav>
		<Menu>
			<a href="#"><MenuItem>File</MenuItem></a>
			<a href="#"><MenuItem>Edit</MenuItem></a>
			<a href="#"><MenuItem>View</MenuItem></a>
			<a href="#"><MenuItem>Help</MenuItem></a>
		</Menu>
	</Nav>
))
```

They can also be vertical.

```jsx
render(() => (
	<Nav vertical classes="medium">
		<Menu>
			<a href="#"><MenuItem>File</MenuItem></a>
			<a href="#"><MenuItem>Edit</MenuItem></a>
			<a href="#"><MenuItem>View</MenuItem></a>
			<a href="#"><MenuItem>Help</MenuItem></a>
		</Menu>
	</Nav>
))
```
