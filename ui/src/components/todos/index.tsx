import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hooks/redux";
import {fetchTodos, postTodo, putTodo} from "../../store/reducers/todos/todoReducer";
import {BasicTable} from "../../modules/tables";
import {Modal} from "../../modules/modal";
import {modalReducer} from "../../store/reducers/modal/modalReducer";
import {tableReducer} from "../../store/reducers/table/tableReducer";
import {IModalTypeContent} from "../../types/modal";

const columns = [
    {title: 'Title', key: 'title'},
    {title: 'Completed', key: 'completed'},
    {title: 'Actions', key: 'actions', edit: true},
];
const modalSettings = {
    titleBtn: 'Add Post',
    title: 'Add Post',
    textContent: 'In This Menu u can add a new post',
    typeContent: [
        {
            key: 'title',
            label: 'Title',
            type: 'TextField',
            variant: 'standard'
        },
        {
            key: 'body',
            label: 'Body',
            type: 'TextField',
            variant: 'standard'
        },
        {
            key: 'users',
            label: 'Users',
            type: 'Select',
            variant: 'standard',
            items: [{value: 'User1', text: 'User1'},{value: 'User2', text: 'User2'}]
        }
    ] as IModalTypeContent[],
    actionsContent: [
        {
            click: 'handleClose',
            text: 'Close'
        },
        {
            click: 'handleSetData',
            text: 'Add Post'
        }
    ]
};

export const TodosList: React.FC = () => {
    const dispatch = useDispatch();
    const {todos, loading, error} = useAppSelector(state => state.todosReducer);
    const {modalData, status} = useAppSelector(state => state.modalReducer);
    const {tableData, statusTable} = useAppSelector(state => state.tableReducer);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);
    useEffect(() => {
        if(status) {
            dispatch(postTodo(modalData));
            dispatch(modalReducer.actions.CLEAR_MODAL_ITEMS());
        }
    }, [dispatch, status, modalData]);
    useEffect(() => {
        if(statusTable) {
            dispatch(putTodo(tableData));
            dispatch(tableReducer.actions.CLEAR_TABLE_ITEMS());
        }
    }, [dispatch, statusTable, tableData]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>{error}</h1>;

    const filterTodos = todos.map((todo: any) => {
        return ({
            ...todo,
            completed: todo.completed ? 'Completed' : 'Await'
        })
    });
    
    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
            <Modal settings={modalSettings} />
            <BasicTable columns={columns} rows={filterTodos}/>
        </div>

    );
};
