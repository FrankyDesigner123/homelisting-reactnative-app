// import action
import { FETCH_HOUSES } from '../actions/houseAction';

// define the slices of states we use in app (houses)
const initialState = {
	houses: [],
};

// reducers are pure javascript functions with 2 params (current state and action)
export default function (state = initialState, action) {
	// we need to handle action.type when its triggered
	switch (action.type) {
		case FETCH_HOUSES:
			return {
				...state,
				houses: action.payload, // we pass the data from payload to houses-state
			};
	}
	//current state
	return state;
}
