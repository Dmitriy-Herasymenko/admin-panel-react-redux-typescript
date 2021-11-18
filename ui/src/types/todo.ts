export interface ITodos {
    id: number,
    title: string,
    completed: boolean

}

export interface todosState {
    todos: ITodos[];
    loading: boolean;
    error: null | string;
}
