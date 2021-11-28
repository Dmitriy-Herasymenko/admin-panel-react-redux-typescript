import * as React from 'react';
import Button from '@mui/material/Button';
import {useDispatch} from "react-redux";
import {modalReducer} from '../../store/reducers/modal/modalReducer'
import {IModalSettings} from "../../types/modal";
import {
    TextField,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Select,
    MenuItem,
    FormControl,
    Box,
    InputLabel,
    OutlinedInput
} from '@mui/material';
import {styles} from './styles';


export const FormDialog: React.FC<IModalSettings> = ({settings}) => {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState({});

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSetData = () => {
        dispatch(modalReducer.actions.ADD_MODAL_ITEMS(data));
        handleClose();
    };

    return (
        <div style={{padding: '25px'}}>
            <Button variant="outlined" onClick={handleClickOpen} style={styles.btn}>{settings.titleBtn}</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{settings.title}</DialogTitle>
                <DialogContent style={{padding: '25px'}}>
                    <DialogContentText>{settings.textContent}</DialogContentText>
                    <Box
                        component="form"
                        sx={styles.box}
                        noValidate
                        autoComplete="off"
                    >
                        {settings.typeContent.map((content, index) => {
                                switch (content.type) {
                                    case 'TextField':
                                        return (
                                            <TextField
                                                key={index}
                                                required
                                                variant={content.variant}
                                                id="outlined-required"
                                                label={content.label}
                                                onChange={(e) => setData(() => {
                                                    const newData = {...data};
                                                    newData[content.key] = e.target.value;
                                                    return newData;
                                                })}
                                            />
                                        );

                                    case 'Select':
                                        return (
                                            <FormControl key={index} sx={styles.formControl}>
                                                <InputLabel id="demo-multiple-name-label">{content.text}</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    input={<OutlinedInput label={content.text}/>}
                                                    label={content.label}
                                                    defaultValue={content.items[0].value}
                                                    onChange={e => setData(() => {
                                                        const newData = {...data};
                                                        newData[content.key] = e.target.value;
                                                        return newData;
                                                    })}
                                                >
                                                    {content.items.map((item: any, index: number) => <MenuItem
                                                        key={index}
                                                        value={item.value}>{item.text}</MenuItem>)}
                                                </Select>
                                            </FormControl>
                                        );
                                    default:
                                        return (<></>)
                                }
                            })}

                    </Box>
                </DialogContent>
                <div style={styles.actions}>
                    {settings.actionsContent.map((btn, index) => <Button key={index}
                        onClick={btn.click === 'handleClose' ? handleClose : handleSetData}>{btn.text}</Button>)
                    }
                </div>
            </Dialog>
        </div>
    )
};