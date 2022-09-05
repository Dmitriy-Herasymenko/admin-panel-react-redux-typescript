import React, {useState} from 'react';
import {IModalSettings, IDataState} from "../../entities";
import {
    Button,
    Dialog,
    DialogTitle,
} from '@mui/material';
import {Content, Action} from './view/index'
import './styles.scss';

interface Iprops {
    settings: IModalSettings;
}

export const Modal: React.FC<Iprops> = ({settings}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [data, setData] = useState<IDataState>({});

    const handleIsOpen = () => setIsOpen(!isOpen);

    return (
        <div className='modal-container'>
            <Button variant="outlined" onClick={handleIsOpen} className='modal-btn'>{settings.titleBtn}</Button>
            <Dialog open={isOpen} onClose={handleIsOpen}>
                <DialogTitle>{settings.title}</DialogTitle>
                <Content settings={settings} data={data} setData={setData}/>
                <Action settings={settings} data={data} handleIsOpen={handleIsOpen}/>
            </Dialog>
        </div>
    )
};