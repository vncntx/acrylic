## Card

A **Card** displays contents as a single column and flush with the container.

```jsx
render(() => (
	<Card classes="medium">
		<Image src="/img/art1.webp" />
		<CardBody>
			<Title>Card</Title>
			<Text>This is a card.</Text>
			<Button>Button</Button>
		</CardBody>
	</Card>
))
```

Cards are elevated by default. Use **CardBody** to display content inside a Card.

```jsx
render(() => (
	<Row>
		<Card classes="medium">
			<Image src="/img/art2.webp" />
			<CardBody>
				<Title>Card</Title>
				<Text>This is a card.</Text>
				<Button>Button</Button>
			</CardBody>
		</Card>
		<Card elevation={5} classes="medium">
			<Image src="/img/art3.webp" />
			<CardBody>
				<Title>Card</Title>
				<Text>This is a card.</Text>
				<Button>Button</Button>
			</CardBody>
		</Card>
	</Row>
))
```

###### Documentation
- [`Card`](/wiki/modules/_components_layout_card_.html)
- [`Image`](/wiki/modules/_components_layout_image_.html)
- [`CardBody`](/wiki/modules/_components_layout_card_.html#cardbody)
