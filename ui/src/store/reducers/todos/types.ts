export interface ITodo {
    id: number,
    title: string,
    completed: boolean
}

export interface todosState {
    todos: ITodo[];
    loading: boolean;
    error: null | string;
}

export interface IPutProps {
    idRow?: number,
    title?: string,
    typeRequest?: string
}

export interface IPostProps {
    [key : string]: string | boolean | number
}

export interface IPost {
    id: number,
    title: string,
    userId: number
}

export interface IPut {
    id: number,
    idRow: number,
    userId: number
    title: string,
}

export const initialState: todosState = {
    loading: false,
    error: null,
    todos: []
};
