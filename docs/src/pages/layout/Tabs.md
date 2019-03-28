## Tabs

The **Tabs** component provides tab-based navigation. When a user selects a tab, the `onTabChange` handler is called with the selected tab's index. Note that tabs are indexed starting from zero. The selected tab can also be controlled using the `selected` prop.

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

###### Documentation

- [`Tabs`](/wiki/modules/_components_layout_tabs_.html)
- [`Tab`](/wiki/modules/_components_layout_tabs_.html#tab)
