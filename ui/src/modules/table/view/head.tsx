import React from "react";
import {TableCell, TableRow} from "@mui/material";
import {TableHead} from "@mui/material";
import {ArrowDropDown, ArrowDropUp} from "@mui/icons-material";
import {useAppSelector} from "../../../hooks/redux";
import {useDispatch} from "react-redux";
import {tableReducer} from "../../../store/reducers/table/tableReducer";
import {styles} from "../styles";

export const HeadTable = ({columns}:any) => {
    const dispatch = useDispatch();
    const {isSort} = useAppSelector(state => state.tableReducer);

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
                                <span onClick={() => dispatch(tableReducer.actions.SORT_TABLE_ITEMS(!isSort))}>
                                                {isSort ? <ArrowDropUp/> : <ArrowDropDown/>}
                                    {col.title}
                                </span> :
                                col.title}
                        </TableCell>))
                }
            </TableRow>
        </TableHead>

    )
};