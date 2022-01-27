import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hooks/redux";
import {getTodo, postTodo, delTodo, putTodo} from "../../store/reducers/todos/actions";
import {BasicTable} from "../../modules/table";
import {Modal} from "../../modules/modal";
import {modalReducer} from "../../store/reducers/modal/modalReducer";
import {tableReducer} from "../../store/reducers/table/tableReducer";
import {IModalSettings} from "../../types";

const columns = [
    {
        title: 'Title',
        key: 'title',
        sort: true
    },
    {
        title: 'Actions',
        key: 'actions',
        edit: true,
        delete: true
    },
];
const modalSettings:IModalSettings = {
    titleBtn: 'Add Post',
    title: 'Add Post',
    textContent: 'In This Menu u can add a new post',
    typeContent: [
        {
            key: 'title',
            label: 'Title',
            type: 'TextField',
            variant: 'standard'
        }
    ],
    actionsContent: [
        {
            click: 'handleClose',
            text: 'Close'
        }, {
            click: 'handleSetData',
            text: 'Add Post'
        }
    ]
};


export const TodosList: React.FC = () => {
    const dispatch = useDispatch();
    const {todos, loading, error} = useAppSelector(state => state.todosReducer);
    const {modalData, status} = useAppSelector(state => state.modalReducer);
    const {tableData, statusTablePut, statusTableDelete} = useAppSelector(state => state.tableReducer);

    useEffect(() => {
        dispatch(getTodo());
    }, [dispatch]);
    useEffect(() => {
        if (status) {            
            dispatch(postTodo(modalData));
            dispatch(modalReducer.actions.CLEAR_MODAL_ITEMS());
        }
    }, [dispatch, status, modalData]);
    useEffect(() => {
        if (statusTablePut) {
            if (tableData) 
                dispatch(putTodo(tableData));
            
            dispatch(tableReducer.actions.CLEAR_TABLE_ITEMS());
        }
        if (statusTableDelete) {
            dispatch(delTodo(tableData.idRow));
            dispatch(tableReducer.actions.CLEAR_TABLE_ITEMS());
        }

    }, [dispatch, statusTablePut, statusTableDelete, tableData]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>{error}</h1>;
    
    const filterTodos = todos.map((todo:any) => {
        return({
            ...todo,
            completed: todo.completed ? 'Completed' : 'Await'
        })
    });

    return (
        <div style={
            {
                display: 'flex',
                flexDirection: 'column',
                width: '100%'
            }
        }>
            <Modal settings={modalSettings}/>
            <BasicTable columns={columns}
                rows={todos}
                pagination={true}/>
        </div>
    );
};
