export default (state, action) => {
	switch (action.type) {
		case 'SET_AUTH_INSTANCE':
			return {
				...state,
				auth: action.payload
			}
		case 'SIGN_IN':
			return {
				...state,
				isSignedIn: true,
				userId: action.payload
			}
		case 'SIGN_OUT':
			return {
				...state,
				isSignedIn: false,
				userId: null
			}
		case 'GET_TRANSACTIONS':
			return {
				...state,
				loading: false,
				transactions: action.payload
			}
		case 'DELETE_TRANSACTION':
			return {
				...state,
				transactions: state.transactions.filter(t => t._id !== action.payload)
			};
		case 'ADD_TRANSACTION':
			return { ...state, transactions: [...state.transactions, action.payload] };
		case 'EDIT_TRANSACTION':
			return { ...state, transactions: state.transactions.map(t => t._id === action.payload._id ? action.payload : t) }
		case 'TRANSACTION_ERROR':
			return {
				...state,
				error: action.payload
			}
		default:
			return state;
	}
};
