import {TableBody, TableCell, TableRow, TextField} from "@mui/material";
import {styles} from "../styles";
import React from "react";
import {Close, Delete, Done, Edit} from "@mui/icons-material";
import {useAppSelector} from "../../../hooks/redux";

export  const BodyTable = ({columns, rows, sortArray, pagination, setDataRow, dataRow, handleSubmit, setEdit, edit, idRow, setIdRow, setOpenDialog}:any) => {
    const {page, rowsPerPage} = useAppSelector(state => state.paginationReducer);

    const deleteRow = (id: number) => {
        setIdRow(id);
        setOpenDialog(true)
        setDataRow({});
    };
    const checkRenderBody = (row: any, col: any) => {
        if (row.id === idRow && edit) return (
            <>
                {
                    !col.edit ?
                        <>
                            <TextField
                                variant="standard"
                                onChange={e =>  setDataRow( () => {
                                    const newData = {...dataRow};
                                    // @ts-ignore
                                    newData[col.key] = e.target.value
                                    return newData
                                })
                                }



                            />
                            <Done onClick={() => handleSubmit('put')}/>
                            <Close onClick={() => {
                                setEdit(false)
                                console.log('sss', edit)
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
                            setIdRow(row.id);
                            setEdit(true)
                        }}
                    /> : <></>
                }
                {col.delete ?
                    <Delete
                        style={styles.deleteIcon}
                        onClick={() => deleteRow(row.id)}
                    /> : <></>
                }
            </>
        )
        return (
            <>
                {row[col.key]}
            </>
        )
    }

    const isPagination = pagination ? sortArray.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows;
    return (
        isPagination.map((row: any) => <TableBody key={row.id}>
                <TableRow key={row.id}>
                    {columns.map((col: any) =>
                        <TableCell
                            align="center"
                            key={col.key}
                            style={styles.tableCellRows}
                        >
                            {checkRenderBody(row, col)}
                        </TableCell>
                    )}
                </TableRow>
            </TableBody>

)
)
};