import React from "react";
import {TableFooter, TableRow} from "@mui/material";
import {Pagination} from "./pagination";

interface IProps {
    count: number,
    pagination?: boolean
}

export const FooterTable: React.FC<IProps> = ({count, pagination}) => {
    if (!pagination) return <></>
    return (
        <tfoot>
            <tr>
                <Pagination count={count}/>
            </tr>
        </tfoot>
    )
};