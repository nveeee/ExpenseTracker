import React from 'react'
import Header from './Header'
import Balance from './Balance'
import IncomeExpense from './IncomeExpense'
import TransactionList from './TransactionList'
import AddTransaction from './AddTransaction'
import { GlobalProvider } from '../context/GlobalState'

const centerStyle = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	minHeight: '100vh'
};

const App = () => {
	return (
		<GlobalProvider>
			<div style={centerStyle}>
				<div className="ui raised very padded text container segment">
					<Header />
					<Balance />
					<IncomeExpense />
					<TransactionList />
					<AddTransaction />
				</div>
			</div>
			
		</GlobalProvider>
	)
}

export default App
