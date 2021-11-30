import * as React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField} from '@mui/material';
import {Edit, Done, Close} from '@mui/icons-material';
import {styles} from "./styles";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {tableReducer} from "../../store/reducers/table/tableReducer";


interface IColumns {
    title: string,
    key: string,
    edit?: boolean
}

interface IProps {
    columns: IColumns[],
    rows: Array<any>
}

export const BasicTable: React.FC<IProps> = ({columns, rows}) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [idRow, setIdRow] = useState<number>();
    const [dataRow, setDataRow] = useState({});

    const editRow = (id: number) => {
        setIdRow(id);
        setEdit(true);
    }
    const handleSubmit = () => {
        dispatch(tableReducer.actions.ADD_TABLE_ITEMS({...dataRow, id: idRow}));
        setEdit(false)
    }

    return (
        <TableContainer component={Paper} style={styles.tableContainer}>
            <Table sx={styles.table}>
                <TableHead>
                    <TableRow>
                        {
                            columns.map((col) =>
                                <TableCell
                                    align="center"
                                    key={col.key}
                                    style={styles.tableCellColumns}
                                >
                                    {col.title}
                                </TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map((row) =>
                            <TableRow key={row.id}>
                                {columns.map((col: any) =>
                                    <TableCell
                                        align="center"
                                        key={col.key}
                                        style={styles.tableCellRows}
                                    >
                                        {edit ? row.id === idRow ? col.edit === true ?
                                                    <>
                                                        <Done onClick={handleSubmit}/>
                                                        <Close onClick={() => setEdit(false)}/>
                                                    </>
                                                    :
                                                    <TextField variant="standard"  onChange={e => setDataRow(() => {
                                                        const newData = {...dataRow};
                                                        // @ts-ignore
                                                        newData[col.key] = e.target.value
                                                        return newData
                                                    })}
                                                    /> :
                                                row[col.key] :
                                            col.edit ?
                                                <Edit onClick={() => editRow(row.id)}/> :
                                                row[col.key]}
                                    </TableCell>
                                )}
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}
