import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const rows = [
    {name: 'Vasili', age: 23, position: 'Barest', exp: '1 year', city: 'Uman'},
    {name: 'Andrew', age: 37, position: 'TechMachine', exp: '3 year', city: 'Uman'},
    {name: 'Vasili', age: 23, position: 'Barest', exp: '2 year', city: 'Uman'},
    {name: 'Vasili', age: 23, position: 'Barest', exp: '1 year', city: 'Uman'},
    {name: 'Vasili', age: 23, position: 'Barest', exp: '1 year', city: 'Uman'},
];

export const BasicTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Position</TableCell>
                        <TableCell>Experience</TableCell>
                        <TableCell>City</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row,index) => (
                        <TableRow key={index}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.age}</TableCell>
                            <TableCell>{row.position}</TableCell>
                            <TableCell>{row.exp}</TableCell>
                            <TableCell>{row.city}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
