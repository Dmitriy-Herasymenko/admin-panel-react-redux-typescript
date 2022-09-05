import React from 'react';
import {
    Table,
    TableContainer,
    Paper,
} from '@mui/material';
import {HeadTable, BodyTable, FooterTable, DialogTable} from './view';
import {ITableProps} from '../../entities/table';
import './styles.scss';

export const BasicTable:React.FC<ITableProps> = ({columns, rows, pagination}) => {
    return (
        <div  className='table-container'>
             <table>
                    <HeadTable
                        columns={columns}
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
                </table>
            <DialogTable />
        </div>
           
 
    );
}