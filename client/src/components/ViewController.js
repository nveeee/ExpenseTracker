import React, { useContext } from 'react'
import Header from './Header'
import Balance from './Balance'
import IncomeExpense from './IncomeExpense'
import TransactionList from './TransactionList'
import AddTransaction from './AddTransaction'
import { GlobalContext } from '../context/GlobalState'

const ViewController = () => {
	const { isSignedIn } = useContext(GlobalContext);

	return (
		<>
			<Header />
			{isSignedIn && (
				<>
					<Balance />
					<IncomeExpense />
					<TransactionList />
					<AddTransaction />
				</>
			)
			}
		</>
	)
}

export default ViewController
