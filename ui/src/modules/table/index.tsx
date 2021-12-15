import {useState} from 'react';
import {useDispatch} from "react-redux";
import {tableReducer} from "../../store/reducers/table/tableReducer";
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
    Pagination,
    TableFooter,
    PaginationItem
} from '@mui/material';
import {Edit, Done, Close, Delete, ArrowDropDown, ArrowDropUp} from '@mui/icons-material';
import {sortRows} from './sortRows';
import {editRow} from "./editRow";
import {styles} from "./styles";
import {IProps} from "../../types/table";


export const BasicTable: React.FC<IProps> = ({columns, rows}) => {
    const dispatch = useDispatch();
    const [openDialog, setOpenDialog] = useState(false);
    const [edit, setEdit] = useState(false);
    const [idRow, setIdRow] = useState<number>();
    const [dataRow, setDataRow] = useState({});
    const [pages, setPages] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<any>(1);
    const [sortArray, setSortArray] = useState<any[]>(rows);
    const [sort, setSort] = useState<any>(true)

    const start = (currentPage - 1) * pages;
    const end = start + pages

    const deleteRow = (id: number) => {
        setIdRow(id);
        setOpenDialog(true)
        setDataRow({});
    }
    const handleSubmit = (typeRequest: string) => {
        dispatch(tableReducer.actions.ADD_TABLE_ITEMS({...dataRow, id: idRow, typeRequest}));
        setEdit(false)
    }

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => setCurrentPage(value);

    return (
        <>
            <TableContainer component={Paper} style={styles.tableContainer}>
                <Table sx={styles.table}>
                    <TableHead>
                        <TableRow>
                            {
                                columns.map((col) => (
                                    <TableCell
                                        align="center"
                                        key={col.key}
                                        style={styles.tableCellColumns}
                                    >
                                        {col.sort ?
                                            <span onClick={() => sortRows(rows, setSort, setSortArray, sort)}>
                                                {sort ? <ArrowDropDown /> : <ArrowDropUp />}
                                                {col.title}
                                            </span> :
                                            col.title}
                                    </TableCell>))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            sortArray.slice(start, end).map((row: any) => <TableRow key={row.id}>
                                    {columns.map((col: any) =>
                                        <TableCell
                                            align="center"
                                            key={col.key}
                                            style={styles.tableCellRows}
                                        >
                                            {
                                                edit ? row.id === idRow ? col.edit === true ?
                                                            <>
                                                                <Done onClick={() => handleSubmit('put')}/>
                                                                <Close onClick={() => setEdit(false)}/>
                                                            </> :
                                                            <TextField variant="standard" onChange={e => setDataRow(() => {
                                                                const newData = {...dataRow};
                                                                // @ts-ignore
                                                                newData[col.key] = e.target.value
                                                                return newData
                                                            })}
                                                            /> :
                                                        row[col.key] :
                                                    <>
                                                        {col.edit ? <Edit
                                                            onClick={() => editRow(row.id, setIdRow, setEdit)}/> : <></>}
                                                        {col.delete ? <Delete style={styles.deleteIcon}
                                                                              onClick={() => deleteRow(row.id)}/> : <></>}
                                                    </>}
                                            {edit ? <></> : row[col.key]}
                                        </TableCell>
                                    )}
                                </TableRow>
                            )
                        }
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <Pagination
                                page={currentPage}
                                count={Math.round(rows.length / pages)}
                                variant="outlined"
                                shape="rounded"
                                onChange={handleChange}
                                style={styles.pagination}
                                renderItem={(item) => <PaginationItem {...item}
                                                                      style={styles.paginationItem}/>}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
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
            </TableContainer>
        </>
    );
}
