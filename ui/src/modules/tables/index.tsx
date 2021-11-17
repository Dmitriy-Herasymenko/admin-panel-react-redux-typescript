import * as React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

interface IColumns {
    title: string,
    key: string
}

interface IProps {
    columns: IColumns[],
    rows: Array<any>
}

export const BasicTable: React.FC<IProps> = ({columns, rows}) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            columns.map((col) =>
                                <TableCell align="center" key={col.key}>{col.title}</TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map((row) =>
                            <TableRow key={row.id}>
                                {columns.map((col: any) =>

                                    <TableCell align="center" key={col.key}>{row[col.key]}</TableCell>
                                )}
                            </TableRow>
                        )
                    }
                </TableBody>

            </Table>
        </TableContainer>
    );
}
