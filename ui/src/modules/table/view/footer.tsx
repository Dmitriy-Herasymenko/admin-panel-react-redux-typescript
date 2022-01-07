import React from "react";
import {TableFooter, TableRow} from "@mui/material";
import {Pagination} from "./pagination";


export const FooterTable = ({count, pagination}: any) => {
    if (!pagination) return <></>
    return (
        <TableFooter>
            <TableRow>
                <Pagination count={count}/>
            </TableRow>
        </TableFooter>
    )
};