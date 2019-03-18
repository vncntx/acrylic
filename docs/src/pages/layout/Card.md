## Card

A **Card** displays contents as a single column and flush with the container.

```jsx
render(() => (
	<Card classes="medium">
		<CardImage src="/img/art1.png" />
		<CardBody>
			<Title>Card</Title>
			<Text>This is a card.</Text>
			<Button>Button</Button>
		</CardBody>
	</Card>
))
```

Cards have an _elevation_ property, which defaults to 1. Use **CardImage** and **CardBody** to display content inside a Card.

```jsx
render(() => (
	<Row>
		<Card classes="medium">
			<CardImage src="/img/art2.png" />
			<CardBody>
				<Title>Card</Title>
				<Text>This is a card.</Text>
				<Button>Button</Button>
			</CardBody>
		</Card>
		<Card elevation={5} classes="medium">
			<CardImage src="/img/art3.png" />
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
- [`CardImage`](/wiki/modules/_components_layout_card_.html#cardimage)
- [`CardBody`](/wiki/modules/_components_layout_card_.html#cardbody)
