export interface IUsers {
    id: number,
    name: string,
    email: string
}

export interface userState {
    users: IUsers[];
    loading: boolean;
    error: null | string;
}
