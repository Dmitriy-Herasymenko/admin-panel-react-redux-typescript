import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hooks/redux";
import {fetchTodos} from "../../store/reducers/todos/todoReducer";
import {BasicTable} from "../../modules/tables";

const columns = [
    {title: 'Title', key: 'title'},
    {title: 'Completed', key: 'completed'},
];

export const TodosList: React.FC = () => {
    const dispatch = useDispatch();
    const {todos, loading, error} = useAppSelector(state => state.todosReducer);
    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>{error}</h1>;

    const filterTodos = todos.map((todo: any)  => {
       return ({
           ...todo,
           completed: todo.completed ? 'Completed' : 'Await'
       })
    });
    return (
        <BasicTable columns={columns} rows={filterTodos} />
    );
};
