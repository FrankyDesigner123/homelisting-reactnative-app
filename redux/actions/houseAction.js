// define the action we want to handle
export const FETCH_HOUSES = 'FETCH_HOUSES';
export const CREATE_HOUSES = 'CREATE_HOUSES';

export const fetchHouses = () => {
	// add logic to fetch houses from API
	// dispatch function to fetchHouses function
	return async (dispatch) => {
		// action needs to return an object with type and payload
		dispatch({
			type: FETCH_HOUSES,
			payload: 1,
		});
	};
};
