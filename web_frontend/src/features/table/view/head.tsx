import React from "react";
import {ArrowDropDown, ArrowDropUp} from "@mui/icons-material";
import {useAppSelector} from "../../../hooks/redux";
import {useDispatch} from "react-redux";
import {tableReducer} from "../../../store/reducers/table/tableReducer";
import { IColumn } from "../../../entities/table"
import  '../styles.scss';

interface IProps {
    columns: IColumn[]
}

export const HeadTable: React.FC<IProps> = ({columns}) => {
    const dispatch = useDispatch();
    const {isSort} = useAppSelector(state => state.tableReducer);

    return (
        <thead>
            <tr>
                {
                    columns.map((col) => (
                        <th
                            align="center"
                            key={col.key}
                            className='table-columns'
                        >
                            {col.sort ?
                                <span onClick={() => dispatch(tableReducer.actions.SORT_TABLE_ITEMS(!isSort))}>
                                                {isSort ? <ArrowDropUp/> : <ArrowDropDown/>}
                                    {col.title}
                                </span> :
                                col.title}
                        </th>))
                }
            </tr>
        </thead>

    )
};