import React from "react";
import {useDispatch} from "react-redux";
import TablePagination from "@mui/material/TablePagination";
import {useAppSelector} from "../../../hooks/redux";
import {paginationReducer} from "../../../store/reducers/pagination/paginationReducer";

interface IProps {
    count: number
}

export const Pagination: React.FC<IProps> = ({count}) => {
    const dispatch = useDispatch();
    const {pages, rowsPerPage} = useAppSelector(state => state.paginationReducer);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => dispatch(paginationReducer.actions.SET_PAGE(newPage))

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement
        | HTMLTextAreaElement>
    ) => dispatch(paginationReducer.actions.SET_ROWS_PER_PAGE(parseInt(event.target.value, 10)));

    return (
        <TablePagination
            count={count}
            page={pages}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 15, 20]}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    )
}