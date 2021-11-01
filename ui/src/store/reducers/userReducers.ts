import {UserAction, userActionTypes, userState} from "../../types/user";

const initialState: userState = {
    users: [],
    loading: false,
    error: null
};

export const userReducer = (state = initialState, action: UserAction): userState => {
    switch (action.type) {
        case userActionTypes.FETCH_USERS:
            return {loading: true, error: null, users:[]};
        case userActionTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload};
        case userActionTypes.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users:[]};
        default:
            return state
    }
}