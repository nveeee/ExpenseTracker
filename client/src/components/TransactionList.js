import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

const TransactionList = () => {
	const { transactions } = useContext(GlobalContext);

	return (
		<>
			<h3 className="ui header">
				<i className="history icon"></i>
				History
			</h3>

			<div className="ui large selection list">
				{transactions.map(transaction => (
					<div key={transaction.id} className="item">
						<Transaction transaction={transaction} />
					</div>
				))}
			</div>
		</>
	)
}

export default TransactionList
