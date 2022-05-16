import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hooks/redux";
import {getTodo, postTodo, delTodo, putTodo} from "../../store/reducers/todos/actions";
import {BasicTable} from "../../features/table";
import {Modal} from "../../features/modal";
import {modalReducer} from "../../store/reducers/modal/modalReducer";
import {tableReducer} from "../../store/reducers/table/tableReducer";
import {IModalSettings} from "../../entities";

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
        },
        {
            key: 'title',
            label: 'Title',
            type: 'Select',
            variant: 'standard',
            items: [
                {
                    value: 'ssss',
                    text: 'ssss'
                }
            ]
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
    const {todos, isLoading, error} = useAppSelector(state => state.todosReducer);
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

    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>{error}</h1>;

    return (
        <div>
            {/* <div style={{backgroundColor: '#fff',  width: '80%', borderRadius: '5px', marginTop: '25px', marginBottom: '25px', margin: '0 auto'}}><Modal settings={modalSettings}/></div> */}
            
            <BasicTable columns={columns}
                rows={todos}
                pagination={true}
            />
        </div>
    );
};
