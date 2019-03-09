## Folder

A **Folder** is a collapsible layout component. The second child element can be hidden by clicking the toggle button.

```jsx
render(() => (
	<Folder elevation={4}>
		<div>
			<Text bold>Dragon</Text>
			<Text italic>(noun)</Text>
		</div>
		<Text>A legendary creature that appears in the folklore of many cultures around the world. Beliefs about dragons vary drastically by region, but dragons in western cultures since the High Middle Ages have often been depicted as winged, horned, four-legged, and capable of breathing fire. Dragons in eastern cultures are usually depicted as wingless, four-legged, serpentine creatures with above-average intelligence.</Text>
	</Folder>
))
```

You can provide custom toggle buttons through a third and fourth child element.

```jsx
render(() => (
	<Folder elevation={4}>
		<div>
			<Text bold>Dragon</Text>
			<Text italic>(noun)</Text>
		</div>
		<Text>A legendary creature that appears in the folklore of many cultures around the world. Beliefs about dragons vary drastically by region, but dragons in western cultures since the High Middle Ages have often been depicted as winged, horned, four-legged, and capable of breathing fire. Dragons in eastern cultures are usually depicted as wingless, four-legged, serpentine creatures with above-average intelligence.</Text>
		<IconButton src="/img/expand.png" />
		<IconButton src="/img/collapse.png" />
	</Folder>
))
```

###### Documentation
- [`Folder`](/wiki/modules/_components_layout_folder_.html)
