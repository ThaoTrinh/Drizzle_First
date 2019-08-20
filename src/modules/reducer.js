import ACTIONS from './action';
import _ from 'lodash';

const defaultState = {
	items: []
};

// reducer lam thay doi store
const todoReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ACTIONS.Types.CREATE_ITEM: {
			let { task } = action.payload;
			let newItem = { id: state.items.length + 1, description: task };
			let newState = _.cloneDeep(state);
			newState.items.push(newItem);
			return newState;
		}

		case ACTIONS.Types.DELETE_ITEM: {
			let { id } = action.payload;
			let newState = _.cloneDeep(state);
			let index = _.findIndex(newState.items, { id });
			newState.items.splice(index, 1);
			return newState;
		}

		default:
			return state;
	}
};

export default todoReducer;
