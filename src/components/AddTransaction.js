import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);
	const { addTransaction } = useContext(GlobalContext);

	const onSubmit = (e) => {
		e.preventDefault();

		if (amount === '') return;
		if (!text) return;

		const newTransaction = {
			id: Math.floor(Math.random() * 10000000),
			text: text,
			amount: +amount
		};

		addTransaction(newTransaction)
		setText('');
		setAmount(0);
	};

	return (
		<>
			<h3>Add new transaction</h3>
			<form onSubmit={onSubmit}>
				<div className="ui form">
					<div className="two fields">
						<div className="field">
							<label htmlFor="text">Text</label>
							<input
								type="text"
								value={text}
								onChange={(e) => setText(e.target.value)}
								placeholder="Enter text..."
							/>
						</div>
						<div className="field">
							<label htmlFor="amount">Amount</label>
							<div className="ui labeled input">
								<label className="ui label" htmlFor="amount">
									$
								</label>
								<input
									type="number"
									id="amount"
									value={amount}
									onChange={(e) => setAmount(e.target.value)}
									placeholder="Enter amount..."
								/>
							</div>
							
						</div>
						
					</div>
					<button className={`ui teal ${!text ? 'disabled' : '' } labeled icon button`}>
							<i className="plus square outline icon"></i>
							Add Transaction
						</button>
					
				</div>
				
			</form>
		</>
	)
}

export default AddTransaction
