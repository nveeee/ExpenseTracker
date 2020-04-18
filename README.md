## Expense Tracker

Expense tracking app built with Hooks and Context.

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

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
