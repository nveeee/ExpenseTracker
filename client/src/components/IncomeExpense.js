import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import useWindowDimensions from '../hooks/useWindowDimensions';
import { numberWithCommas } from '../utils/format';

const IncomeExpense = () => {
	const { transactions } = useContext(GlobalContext);
	const { width } = useWindowDimensions();

	const amounts = transactions.map(transaction => transaction.amount);

	const income = Math.abs(amounts
		.filter(item => item > 0)
		.reduce((acc, item) => acc += item, 0))
		.toFixed(2);
	
	const expense = Math.abs(amounts
		.filter(item => item < 0)
		.reduce((acc, item) => acc += item, 0))
		.toFixed(2);

	return (
		<div className="ui placeholder segment">
			<div className="ui two column stackable center aligned grid">
				{width > 767 && (
					<div className="ui vertical divider"><i className="dollar sign icon"></i></div>
				)}
				<div className="middle aligned row">
					<div className="column">
						<h4>Income</h4>
						<h4 style={{ color: income > 0 ? 'green' : 'black' }}>{numberWithCommas(income)}</h4>
					</div>
					<div className="column">
						<h4>Expense</h4>
						<h4 style={{ color: expense > 0 ? 'red' : 'black' }}>{numberWithCommas(expense)}</h4>
					</div>
				</div>
				
			</div>
			
		</div>
	)
}

export default IncomeExpense
