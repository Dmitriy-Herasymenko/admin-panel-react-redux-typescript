import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {
    Table,
    TableContainer,
    Paper,
} from '@mui/material';
import {HeadTable, BodyTable, FooterTable, DialogTable} from './view';
import {IProps} from "../../types/";
import {styles} from "./styles";
import {tableReducer} from "../../store/reducers/table/tableReducer";


export const BasicTable: React.FC<IProps> = ({columns, rows, pagination}) => {
    const dispatch = useDispatch();

    const [openDialog, setOpenDialog] = useState(false);
    const [edit, setEdit] = useState(false);
    const [idRow, setIdRow] = useState<number>();
    const [dataRow, setDataRow] = useState({});
    const [sortArray, setSortArray] = useState<any[]>(rows);
    const [sort, setSort] = useState<any>(true);

    const handleSubmit = (typeRequest: string) => {
        dispatch(tableReducer.actions.ADD_TABLE_ITEMS({...dataRow, id: idRow, typeRequest}));
        setEdit(false)
    };

    return (
        <>
            <TableContainer component={Paper} style={styles.tableContainer}>
                <Table sx={styles.table}>
                    <HeadTable
                        columns={columns}
                        rows={rows}
                        sort={sort}
                        setSort={setSort}
                        setSortArray={setSortArray}
                    />
                    <BodyTable
                        rows={rows}
                        columns={columns}
                        sortArray={sortArray}
                        pagination={pagination}
                        setDataRow={setDataRow}
                        dataRow={dataRow}
                        handleSubmit={handleSubmit}
                        setEdit={setEdit}
                        edit={edit}
                        idRow={idRow}
                        setIdRow={setIdRow}
                        setOpenDialog={setOpenDialog}
                    />
                    <FooterTable
                        count={rows.length}
                        pagination={pagination}
                    />
                </Table>
            </TableContainer>
            <DialogTable
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
                setEdit={setEdit}
                handleSubmit={handleSubmit}
            />
        </>
    );
}