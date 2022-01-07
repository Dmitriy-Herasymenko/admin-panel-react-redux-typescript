import {TableCell, TableRow} from "@mui/material";
import {TableHead} from "@mui/material";
import {styles} from "../styles";
import {sortRows} from "../sortRows";
import {ArrowDropDown, ArrowDropUp} from "@mui/icons-material";
import React from "react";

export const HeadTable = ({columns, rows, sort, setSort, setSortArray}:any) => {
    return (
        <TableHead>
            <TableRow>
                {
                    columns.map((col:any) => (
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
        </TableHead>

    )
};