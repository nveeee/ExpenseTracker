export default (state, action) => {
	switch (action.type) {
		case 'DELETE_TRANSACTION':
			return state.filter(t => t.id !== action.payload);
		case 'ADD_TRANSACTION':
			return [...state, action.payload];
		default:
			return state;
	}
};
