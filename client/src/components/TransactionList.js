import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

const TransactionList = () => {
	const { userId, transactions, getTransactions } = useContext(GlobalContext);

	useEffect(() => {
		getTransactions(userId);
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<h3 className="ui header">
				<i className="history icon"></i>
				History
			</h3>

			<div className="ui large selection list">
				{transactions.map(transaction => (
					<div key={transaction._id} className="item">
						<Transaction transaction={transaction} />
					</div>
				))}
			</div>
		</>
	)
}

export default TransactionList
