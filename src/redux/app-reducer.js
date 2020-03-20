import { getAuth } from "./login-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
	initialized: false
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {

		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true,
			}

		default:
			return { ...state };
	}
}


export const setInitializedSuccess = () => ({ type: INITIALIZED_SUCCESS });



export const initializeApp = () => (dispatch) => {
	let promise = dispatch(getAuth());
	Promise.all([promise])
		.then(() => {
			dispatch(setInitializedSuccess());
		});

}


export default appReducer; 