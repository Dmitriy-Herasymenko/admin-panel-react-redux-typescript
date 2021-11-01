import {Dispatch} from "react";
import {UserAction, userActionTypes} from "../../types/user";
import axios from "axios";


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: userActionTypes.FETCH_USERS});
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({type: userActionTypes.FETCH_USERS_SUCCESS, payload: response.data});
        }
        catch (e) {
            dispatch({
                type: userActionTypes.FETCH_USERS_ERROR,
                payload: 'Error loading users'
            })
        }
    }
}