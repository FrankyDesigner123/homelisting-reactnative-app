// define the action we want to handle
export const FETCH_HOUSES = 'FETCH_HOUSES';
export const CREATE_HOUSES = 'CREATE_HOUSES';

export const fetchHouses = () => {
	// dispatch function to fetchHouses function
	return async (dispatch) => {
		// add logic to fetch houses from API
		const result = await fetch('http://192.168.1.63:3000/api/houses');
		const resultData = await result.json();
		// console.log(resultData);

		// action needs to return an object with type and payload
		dispatch({
			type: FETCH_HOUSES,
			payload: resultData,
		});
	};
};
