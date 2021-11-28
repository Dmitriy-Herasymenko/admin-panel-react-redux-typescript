export interface IUsers {
    id: number,
    name: string,
    email: string,
    username: string,
    phone: string,
    website: string,
}

export interface userState {
    users: IUsers[];
    loading: boolean;
    error: null | string;
}
