## Expense Tracker

Expense tracking app built with Hooks and Context, connected to a backend server running NodeJS/Express and MongoDB(Mongoose).

Custom `useWindowDimensions` hook allows conditional rendering based on window size

```js
// Only render vertical divider icon if width exceeds 767 pixels
{width > 767 && (
	<div className="ui vertical divider"><i className="dollar sign icon"></i></div>
)}
```

Context Hook provides dispatch functions only when needed

```js
// context/GlobalState.js
const addTransaction = (transaction) => {
	dispatch({
		type: 'ADD_TRANSACTION',
		payload: transaction
	});
}

// components/AddTransaction.js
const { addTransaction } = useContext(GlobalContext);

...

const onSubmit = (e) => {
	e.preventDefault();

	// Form validation... 
	...

	addTransaction(newTransaction)
	setText('');
	setAmount(0);
};
```
Transaction Controller handles database requests using Async/Await syntax.
```js
// controllers/transactionController.js
// POST /api/v1/transactions
exports.addTransaction = async (req, res, next) => {
	try {
		const transaction = await Transaction.create(req.body);

		return res.status(201).json({
			success: true,
			data: transaction
		});
	} catch (error) {
		if (error.name === 'ValidationError') {
			const messages = Object.values(error.errors).map(val => val.message);

			return res.status(400).json({
				success: false,
				error: messages
			});
		} else {
			return res.status(500).json({
				success: false,
				error: 'Server Error'
			});
		}
	}
};
```

### `npm run build/cd server/npm start`

Build app by running `npm run build` in the client directory, then run the app by changing to the server directory and running `npm start`. Requires environment variables for development/production state and MongoDB Atlas.

