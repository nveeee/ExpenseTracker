import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
	const { transactions } = useContext(GlobalContext);

	const amounts = transactions.map(transaction => transaction.amount);
	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

	return (
		<>
		<h4 className="ui center aligned header">Your Balance</h4>
		<h1 className={`ui ${total < 0 ? 'red' : total > 0 ? 'green' : ''} center aligned header`}>{total < 0 && '-'}${Math.abs(total)}</h1>
		</>
	)
}

export default Balance
