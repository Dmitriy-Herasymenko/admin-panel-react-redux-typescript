import React, {useState} from "react";
import {TextField} from "@mui/material";
import {Close, Delete, Done, Edit} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../hooks/redux";
import {tableReducer} from "../../../store/reducers/table/tableReducer";
import {sortRows} from "../utils/sortRows";
import {ITableProps, IColumn} from "../../../entities/table";
import  '../styles.scss';


export const BodyTable: React.FC<ITableProps> = ({
                              columns,
                              rows,
                              pagination
                          }) => {

    const dispatch = useDispatch();
    const {pages, rowsPerPage} = useAppSelector(state => state.paginationReducer);
    const {isSort, isEdit, idRow} = useAppSelector(state => state.tableReducer);
    const [dataRow, setDataRow] = useState({});

    const checkRenderBody = (row:Record<string, any>, col:IColumn) => {
        if (row.id === idRow && isEdit) return (
            <>
                {
                    !col.edit ?
                        <>
                            <TextField
                                variant="standard"
                                onChange={e => setDataRow(() => {
                                    const newData:Record<string, any> = {...dataRow};
                                    newData[col.key] = e.target.value
                                    return newData
                                })
                                }
                            />
                            <Done onClick={() => {
                                dispatch(tableReducer.actions.ADD_TABLE_ITEMS(
                                    {
                                        ...dataRow,
                                        idRow,
                                        typeRequest: 'put'
                                    }))
                            }}/>
                            <Close onClick={() => {
                                dispatch(tableReducer.actions.IS_DIALOG( false))
                            }}/>
                        </>
                        : <></>
                }
            </>
        )
        if (col.edit) return (
            <>
                {row[col.key]}
                {col.edit ?
                    <Edit
                        onClick={() => {
                            dispatch(tableReducer.actions.EDIT_TABLE_ITEMS({
                                isEdit: true,
                                idRow: row.id
                            }))
                        }}
                    /> : <></>
                }
                {col.delete ?
                    <Delete
                        className='table-rows-delete'
                        onClick={() => {
                            dispatch(tableReducer.actions.DIALOG_TABLE({isOpenDialog: true, idRow: row.id}));
                            setDataRow({})
                        }}
                    /> : <></>
                }
            </>
        )
        return (
            <>
                {row[col.key]}
            </>
        )
    };

    const sorted = sortRows(rows, isSort);
    const isPagination = pagination ? sorted.slice(pages * rowsPerPage, pages * rowsPerPage + rowsPerPage) : rows;
    return (
        isPagination.map((row:Record<string, any>) => <tbody key={row.id}>
                <tr>
                    {columns.map((col) =>
                        <th
                            align="center"
                            key={col.key}
                            className='table-rows'
                        >
                            {checkRenderBody(row, col)}
                        </th>
                    )}
                </tr>
            </tbody>
        ))
};