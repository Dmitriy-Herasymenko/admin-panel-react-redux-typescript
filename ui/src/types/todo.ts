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
