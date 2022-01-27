import {
    TextField,
    DialogContent,
    DialogContentText,
    Select,
    MenuItem,
    FormControl,
    Box,
    InputLabel,
    OutlinedInput
} from '@mui/material';
import {styles} from '../styles';

export const Content = ({settings, data, setData}:any) => {

    const renderContent = (content:any, index:any) => {
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
                            defaultValue={content.items?.[0].value}
                            onChange={e => setData(() => {
                                const newData = {...data};
                                newData[content.key] = e.target.value;
                                return newData;
                            })}
                        >
                            {content.items?.map((item:any, index:any) => <MenuItem
                                key={index}
                                value={item.value}>{item.text}</MenuItem>)}
                        </Select>
                    </FormControl>
                );
            default:
                return (<></>)
    }}
    
    return (
        <DialogContent style={{padding: '25px'}}>
                    <DialogContentText>{settings.textContent}</DialogContentText>
                    <Box
                        component="form"
                        sx={styles.box}
                        noValidate
                        autoComplete="off"
                    >
                        {settings.typeContent.map((content:any, index:any) => renderContent(content, index))}

                    </Box>
        </DialogContent>
    )
} 