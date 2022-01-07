import {Button, Dialog, DialogActions, DialogTitle} from "@mui/material";
import {styles} from "../styles";
import React from "react";

export const DialogTable = ({openDialog, setOpenDialog, handleSubmit}: any) => {

    return (
        <Dialog
            open={openDialog}
            onClose={() => setOpenDialog(!openDialog)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Are you sure you want to delete?"}
            </DialogTitle>
            <DialogActions>
                <Button onClick={() => setOpenDialog(!openDialog)}>Disagree</Button>
                <Button onClick={() => handleSubmit('delete')} style={styles.deleteBtn}>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    )
};
