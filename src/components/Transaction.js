import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext);

	const moneyStyle = {
		color: transaction.amount < 0 ? 'red' : transaction.amount > 0 ? 'green' : 'black',
		fontSize: '.75em'
	};

	return (
		<>
			<div className="right floated content">
				<button
					onClick={() => deleteTransaction(transaction.id)}
					className="ui red labeled icon button"
				>
				<i className="trash icon"></i>
				Remove
				</button>
			</div>
			<div className="content">
				<div className="ui tiny header">
					{transaction.text}
				</div>
				<div style={moneyStyle}>{transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}</div>
			</div>
			
		</>
	)
}

export default Transaction
