export interface userState {
    users: any[];
    loading: boolean;
    error: null | string;
}
export enum userActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

interface FetchUsersAction {
    type: userActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction {
    type: userActionTypes.FETCH_USERS_SUCCESS;
    payload: [];
}
interface FetchUsersErrorAction {
    type: userActionTypes.FETCH_USERS_ERROR;
    payload: string
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction;