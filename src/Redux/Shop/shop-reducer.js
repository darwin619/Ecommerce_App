import Shop_Items from './Shop_Items';

const INITIAL_STATE = {
	collections: Shop_Items
}

const shopReducer = (state=INITIAL_STATE, action) => {
	switch(action.type) {
		default:
		return state;
	}
}

export default shopReducer;