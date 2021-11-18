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
        <TableContainer component={Paper} style={{
            width: '85%',
            margin: '0 auto',
            height: '100%',
            borderRadius: '12px',
            boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.05)',
            padding: '10px'
        }}>
            <Table sx={{minWidth: 650}}>
                <TableHead>
                    <TableRow>
                        {
                            columns.map((col) =>
                                <TableCell
                                    align="center"
                                    key={col.key}
                                    style={{fontSize: '12px', fontWeight: 600}}
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
                                        style={{fontSize: '12px', fontWeight: 'initial'}}
                                    >
                                        {row[col.key]}
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
