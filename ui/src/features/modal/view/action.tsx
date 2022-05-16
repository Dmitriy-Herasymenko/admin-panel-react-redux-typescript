import {useDispatch} from 'react-redux';
import {modalReducer} from '../../../store/reducers/modal/modalReducer'
import {
    Button
} from '@mui/material';
import {IModalSettings} from '../../../entities/modal'
import   '../styles.scss'
interface IProps {
    settings: IModalSettings,
    handleIsOpen?: () => void,
    data: {[key:string]: any}
}

export const Action: React.FC<IProps> = ({settings, handleIsOpen, data}) => {
    const dispatch = useDispatch();

    const handleSetData = () => {
        dispatch(modalReducer.actions.ADD_MODAL_ITEMS(data));
    };

    return (
        <div className='actions'>
        {settings.actionsContent.map((btn, index:number) => <Button
            key={index}
            className='modal-btn'
            onClick={btn.click === 'handleClose' ? handleIsOpen : handleSetData}>
            {btn.text}
        </Button>)
        }
    </div>
    )
}