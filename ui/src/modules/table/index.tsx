import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {tableReducer} from "../../store/reducers/table/tableReducer";
import {Pagination} from "./pagination";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    TableFooter,
} from '@mui/material';
import {Edit, Done, Close, Delete, ArrowDropDown, ArrowDropUp} from "@mui/icons-material";
import {sortRows} from "./sortRows";
import {IProps} from "../../types/table";
import {styles} from "./styles";


export const BasicTable: React.FC<IProps> = ({columns, rows, pagination}) => {
    const dispatch = useDispatch();
    const [openDialog, setOpenDialog] = useState(false);
    const [edit, setEdit] = useState(false);
    const [idRow, setIdRow] = useState<number>();
    const [dataRow, setDataRow] = useState({});
    const [sortArray, setSortArray] = useState<any[]>(rows);
    const [sort, setSort] = useState<any>(true)
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const deleteRow = (id: number) => {
        setIdRow(id);
        setOpenDialog(true)
        setDataRow({});
    };
    const handleSubmit = (typeRequest: string) => {
        dispatch(tableReducer.actions.ADD_TABLE_ITEMS({...dataRow, id: idRow, typeRequest}));
        setEdit(false)
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
    const renderTableHead = () => {
        return (
            <TableRow>
                {
                    columns.map((col) => (
                        <TableCell
                            align="center"
                            key={col.key}
                            style={styles.tableCellColumns}
                        >
                            {col.sort ?
                                <span onClick={() => {
                                    const sorted = sortRows(rows, sort)
                                    setSort(!sort)
                                    setSortArray(sorted)
                                }}>
                                                {sort ? <ArrowDropDown/> : <ArrowDropUp/>}
                                    {col.title}
                                </span> :
                                col.title}
                        </TableCell>))
                }
            </TableRow>
        )
    };
    const renderTableBody = () => {
        const isPagination = pagination ? sortArray.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows;
        return (
            isPagination.map((row: any) => <TableRow key={row.id}>
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
            )
        )
    };
    const renderTableFooter = () => {
        if (!pagination) return <></>
        return <Pagination
            count={rows.length}
            page={page}
            rowsPerPage={rowsPerPage}
            setPage={setPage}
            setRowsPerPage={setRowsPerPage}
        />
    };
    const renderDialog = () => {
        return (
            <Dialog
                open={openDialog}
                onClose={() => setOpenDialog(!openDialog)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to delete?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(!openDialog)}>Disagree</Button>
                    <Button onClick={() => handleSubmit('delete')} style={styles.deleteBtn}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        )
    };

    return (
        <>
            <TableContainer component={Paper} style={styles.tableContainer}>
                <Table sx={styles.table}>
                    <TableHead>
                        {renderTableHead()}
                    </TableHead>
                    <TableBody>
                        {renderTableBody()}
                    </TableBody>
                    <TableFooter>
                        {renderTableFooter()}
                    </TableFooter>
                </Table>
            </TableContainer>
            {renderDialog()}
        </>
    );
}