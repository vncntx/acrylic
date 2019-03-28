## Image

The **Image** component is an easy way to display images. You can add a description using a **Caption**.

```jsx
render(() => (
	<Image src="/img/art3.webp">
		<Caption>
			This is a description.
		</Caption>
	</Image>
))
```

**Image** supports responsive images using media queries. In this case, a _default_ source set is required. Try resizing your browser to see this in action below.

```jsx
render(() => (
	<Image src={{
		"(max-width: 600px)": "/img/art1.webp",
		"(max-width: 1000px)": "/img/art2.webp",
		"default": "/img/art3.webp"
	}}>
		<Caption>
			This is a description.
		</Caption>
	</Image>
))
```

Captions can also be positioned at the top. They support the `elevation` property and acrylic texture.

```jsx
render(() => (
	<Image src="/img/art3.webp">
		<Caption elevation={1} acrylic top>
			This is a description.
		</Caption>
	</Image>
))
```

###### Documentation

- [`Image`](/wiki/modules/_components_media_image_.html)
- [`Caption`](/wiki/modules/_components_layout_caption_.html)
