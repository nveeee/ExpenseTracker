import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format';

const Transaction = ({ transaction }) => {
	const { deleteTransaction, editTransaction, userId } = useContext(GlobalContext);
	const [formFocused, setFormFocused] = useState(false);
	const [values, setValues] = useState({ text: transaction.text, amount: transaction.amount });

	const moneyStyle = {
		color: transaction.amount < 0 ? 'red' : transaction.amount > 0 ? 'green' : 'black',
		fontSize: '.75em'
	};

	const submitEdit = async () => {
		await editTransaction({...transaction, text: values.text, amount: +(values.amount)});
		setFormFocused(false);
	};

	if (formFocused) {
		return (
			<>
				<div className="content">
					<div className="ui form">
						<button
							onClick={() => setFormFocused(false)}
							className="ui red icon right floated button"
						>
							<i className="close icon"></i>
						</button>
						<button
							type="submit"
							onClick={submitEdit}
							className="ui green icon right floated button"
						>
							<i className="check icon"></i>
						</button>
						
						<div className="fields">
							<div className="field">
								<input type="text" name="text" value={values.text} onChange={(e) => setValues({...values, [e.target.name]: e.target.value})} />
							</div>
							<div className="field">
								<input type="number" step="0.01" name="amount" value={values.amount} onChange={(e) => setValues({...values, [e.target.name]: e.target.value})} />
							</div>
						</div>
					</div>
					
					
				</div>
			</>
		);
	} else {
		return (
			<div onClick={() => setFormFocused(true)}>
				<div className="right floated content">
					<button
						onClick={() => deleteTransaction(transaction._id)}
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
					<div style={moneyStyle}>{numberWithCommas(transaction.amount)}</div>
				</div>
			</div>
		)
	}
}

export default Transaction
