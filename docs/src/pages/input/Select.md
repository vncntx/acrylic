## Select

A **Select** input lets the user pick from a large number of available choices.

```jsx
render(() => (
	<>
		<Select label="Select" selection={3}>
			<Option value={1} label="Select" />
			<Option value={2} label="Disabled" disabled/>
			<Option value={3} label="Primary" variant="primary"/>
			<Option value={4} label="Success" variant="success"/>
			<Option value={5} label="Warning" variant="warning"/>
			<Option value={6} label="Danger" variant="danger"/>
		</Select>
		<Select label="Required" required>
			<Option value={1} label="Acamar" />
			<Option value={2} label="Acubens" />
			<Option value={3} label="Polaris" />
			<Option value={4} label="Pollux" />
			<Option value={5} label="Sirius" />
		</Select>
		<Select label="Disabled" disabled>
			<Option value={1} label="Acamar" />
			<Option value={2} label="Acubens" />
			<Option value={3} label="Polaris" />
			<Option value={4} label="Pollux" />
			<Option value={5} label="Sirius" />
		</Select>
		<Select label="Primary" variant="primary">
			<Option value={1} label="Acamar" />
			<Option value={2} label="Acubens" />
			<Option value={3} label="Polaris" />
			<Option value={4} label="Pollux" />
			<Option value={5} label="Sirius" />
		</Select>
		<Select label="Success" variant="success">
			<Option value={1} label="Acamar" />
			<Option value={2} label="Acubens" />
			<Option value={3} label="Polaris" />
			<Option value={4} label="Pollux" />
			<Option value={5} label="Sirius" />
		</Select>
		<Select label="Warning" variant="warning">
			<Option value={1} label="Acamar" />
			<Option value={2} label="Acubens" />
			<Option value={3} label="Polaris" />
			<Option value={4} label="Pollux" />
			<Option value={5} label="Sirius" />
		</Select>
		<Select label="Danger" variant="danger">
			<Option value={1} label="Acamar" />
			<Option value={2} label="Acubens" />
			<Option value={3} label="Polaris" />
			<Option value={4} label="Pollux" />
			<Option value={5} label="Sirius" />
		</Select>
		<Select label="Placeholder" placeholder="Placeholder">
			<Option value={1} label="Acamar" />
			<Option value={2} label="Acubens" />
			<Option value={3} label="Polaris" />
			<Option value={4} label="Pollux" />
			<Option value={5} label="Sirius" />
		</Select>
		<Select label="Invalid" invalid comment="This field has an error">
			<Option value={1} label="Acamar" />
			<Option value={2} label="Acubens" />
			<Option value={3} label="Polaris" />
			<Option value={4} label="Pollux" />
			<Option value={5} label="Sirius" />
		</Select>
		<Select label="Comment" variant="success" comment="This field is correct">
			<Option value={1} label="Acamar" />
			<Option value={2} label="Acubens" />
			<Option value={3} label="Polaris" />
			<Option value={4} label="Pollux" />
			<Option value={5} label="Sirius" />
		</Select>
	</>
))
```
