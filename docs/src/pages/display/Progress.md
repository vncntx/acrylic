## Progress

The **Progress** component represents the current status of an ongoing task or action. It can be controlled using the `value` (default: 0) and `max` (default: 1) props. It also supports the standard variants, and can be indeterminate.

```jsx
render(() => (
	<Section elevation={1}>
		<Text>Progress</Text>
		<Progress value={20} max={100} />
		<Text>Primary</Text>
		<Progress value={40} max={100} variant="primary" />
		<Text>Success</Text>
		<Progress value={60} max={100} variant="success" />
		<Text>Warning</Text>
		<Progress value={80} max={100} variant="warning" />
		<Text>Danger</Text>
		<Progress value={100} max={100} variant="danger" />
		<Divider />
		<Text>Indeterminate</Text>
		<Progress indeterminate variant="primary" />
	</Section>
))
```
