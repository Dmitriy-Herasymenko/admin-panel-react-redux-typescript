
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../hooks/redux";
import {tableReducer} from "../../../store/reducers/table/tableReducer";
import {Button, Dialog, DialogActions, DialogTitle} from "@mui/material";
import  '../styles.scss';

export const DialogTable = () => {
    const dispatch = useDispatch();
    const {isOpenDialog, idRow} = useAppSelector(state => state.tableReducer)

    return (
        <Dialog
            open={isOpenDialog}
            onClose={() => dispatch(tableReducer.actions.IS_DIALOG(!isOpenDialog))}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className="table-dialog"
        >
            <DialogTitle id="alert-dialog-title">
                {"Are you sure you want to delete?"}
            </DialogTitle>
            <DialogActions className='table-dialog-actions'>
                <Button onClick={() => dispatch(tableReducer.actions.IS_DIALOG(!isOpenDialog))}>Disagree</Button>
                <Button onClick={() => dispatch(tableReducer.actions.ADD_TABLE_ITEMS({idRow, typeRequest: 'delete'}))} className="delete_btn ">
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    )
};
