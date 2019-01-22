## Section

[wiki]: /wiki/modules/_components_layout_section_.html

A Section is a container for a specific part of an app or page.

```jsx
<Section>
	<Title>Dragon</Title>
	<Text>A dragon is a large, serpent-like legendary creature that appears in the folklore of many cultures around the world. Beliefs about dragons vary drastically by region, but dragons in western cultures since the High Middle Ages have often been depicted as winged, horned, four-legged, and capable of breathing fire. Dragons in eastern cultures are usually depicted as wingless, four-legged, serpentine creatures with above-average intelligence.</Text>
</Section>
```

Sections can have an elevation of up to 6. Use elevation to convey information heirarchy and separation; draw the user's attention by using a higher elevation value.

```jsx
<Section elevation={0} />
<Section elevation={1} />
<Section elevation={2} />
<Section elevation={3} />
<Section elevation={4} />
<Section elevation={5} />
<Section elevation={6} />
```

And they can be textured using the "acrylic" material.

```jsx
<Section elevation={1} classes="demo-acrylic-container">
	<Section elevation={6} acrylic>
		<Title>Dragon</Title>
		<Text>A dragon is a large, serpent-like legendary creature that appears in the folklore of many cultures around the world. Beliefs about dragons vary drastically by region, but dragons in western cultures since the High Middle Ages have often been depicted as winged, horned, four-legged, and capable of breathing fire. Dragons in eastern cultures are usually depicted as wingless, four-legged, serpentine creatures with above-average intelligence.</Text>
	</Section>
</Section>
```
