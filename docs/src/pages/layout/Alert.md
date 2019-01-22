## Alert

[wiki]: /wiki/modules/_components_layout_alert_.html

An Alert draws attention to a small piece of content. Several variants are available to provide contextual information to the user. They can be dismissed using a button.

```jsx
<Alert>This is a normal alert</Alert>
<Alert variant="primary">This is a primary alert</Alert>
<Alert variant="success">This is a success alert</Alert>
<Alert variant="info">This is an info alert</Alert>
<Alert variant="warning">This is a warning alert</Alert>
<Alert variant="danger">This is a danger alert</Alert>
```

The control component can also be set.

```jsx
<Alert controlComponent={<Button>Custom</Button>}>This one has a custom control</Alert>
```
