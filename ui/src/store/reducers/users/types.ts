export interface IUser {
    id: number,
    name: string,
    email: string,
    username: string,
    phone: string,
    website: string,
}

export interface userState {
    users: IUser[];
    loading: boolean;
    error: null | string;
}
