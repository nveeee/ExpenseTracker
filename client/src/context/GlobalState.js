import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
	transactions: [],
	errors: null,
	loading: true,
	isSignedIn: null,
	userId: null
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	const signIn = (userId) => {
		dispatch({
			type: 'SIGN_IN',
			payload: userId
		});
	}

	const signOut = () => {
		dispatch({ type: 'SIGN_OUT' });
	}

	const getTransactions = async (userId) => {
		try {
			// Proxy allows us to omit http://localhost:5000 from URL
			const res = await axios.get('/api/v1/transactions', {
				params: {
					userId: userId
				}
			});

			dispatch({
				type: 'GET_TRANSACTIONS',
				payload: res.data.data
			});
		} catch (error) {
			dispatch({
				type: 'TRANSACTION_ERROR',
				payload: error.response.data.error
			});
		}
	}

	const deleteTransaction = async (id) => {
		try {
			await axios.delete(`/api/v1/transactions/${id}`);

			dispatch({
				type: 'DELETE_TRANSACTION',
				payload: id
			});
		} catch (error) {
			dispatch({
				type: 'TRANSACTION_ERROR',
				payload: error.response.data.error
			});
		}
	}

	const addTransaction = async (transaction) => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		}

		try {
			const res = await axios.post('/api/v1/transactions', transaction, config);

			dispatch({
				type: 'ADD_TRANSACTION',
				payload: res.data.data
			});
		} catch (error) {
			dispatch({
				type: 'TRANSACTION_ERROR',
				payload: error.response.data.error
			});
		}
	}

	const editTransaction = async (transaction) => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		}

		try {
			await axios.put(`/api/v1/transactions/${transaction._id}`, transaction, config);

			dispatch({
				type: 'EDIT_TRANSACTION',
				payload: transaction
			});
		} catch (error) {
			console.log(error);
			dispatch({
				type: 'TRANSACTION_ERROR',
				payload: error
			});
		}
	}

	return (
	<GlobalContext.Provider
		value=
			{{
				transactions: state.transactions,
				error: state.error,
				loading: state.loading,
				isSignedIn: state.isSignedIn,
				userId: state.userId,
				signIn: signIn,
				signOut: signOut,
				getTransactions: getTransactions,
				deleteTransaction: deleteTransaction,
				addTransaction: addTransaction,
				editTransaction: editTransaction
			}}
		>
		{children}
	</GlobalContext.Provider>);
};
