import React from 'react';
import {
    Table,
    TableContainer,
    Paper,
} from '@mui/material';
import {HeadTable, BodyTable, FooterTable, DialogTable} from './view';
import {ITableProps} from '../../types/table';
import {styles} from './styles';

export const BasicTable:React.FC<ITableProps> = ({columns, rows, pagination}) => {
    return (
        <>
            <TableContainer component={Paper} style={styles.tableContainer}>
                <Table sx={styles.table}>
                    <HeadTable
                        columns={columns}
                        rows={rows}
                    />
                    <BodyTable
                        rows={rows}
                        columns={columns}
                        pagination={pagination}
                    />
                    <FooterTable
                        count={rows.length}
                        pagination={pagination}
                    />
                </Table>
            </TableContainer>
            <DialogTable />
        </>
    );
}