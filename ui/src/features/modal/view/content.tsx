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
import {IModalData, IModalSettings, IModalTypeContent, IModalActionsItems} from '../../../entities'
import '../styles.scss'

interface IProps {
    settings: IModalSettings;
    data: IModalData,
    setData: (data:{[key:string]: any}) => void;

}

export const Content: React.FC<IProps> = ({settings, data, setData}) => {
    const renderContent = (content:IModalTypeContent, index:number) => {
      
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
                    <FormControl key={index}>
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
                            {content.items?.map((item:IModalActionsItems, index:number) => <MenuItem
                                key={index}
                                value={item.value}>{item.text}</MenuItem>)}
                        </Select>
                    </FormControl>
                );
            default:
                return (<></>)
    }}
    
    return (
        <DialogContent className='modal-dialog-content'>
                    <DialogContentText>{settings.textContent}</DialogContentText>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                    >
                        {settings.typeContent.map((content, index) => renderContent(content, index))}

                    </Box>
        </DialogContent>
    )
} 