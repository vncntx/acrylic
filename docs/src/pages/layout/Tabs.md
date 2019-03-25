## Tabs

```jsx
render(() => {
	const [currentTab, setCurrent] = React.useState(0);

	return (
		<>
			<Tabs selected={currentTab} onTabChange={setCurrent}>
				<Tab>Tab</Tab>
				<Tab>Tab</Tab>
				<Tab>Tab</Tab>
				<Tab>Tab</Tab>
			</Tabs>
			<Section elevation={1}>
				<Text>Tab { currentTab } is currently selected.</Text>
			</Section>
		</>
	);
})
```
