import {useDispatch} from "react-redux";
import {modalReducer} from '../../../store/reducers/modal/modalReducer'
import {
    Button
} from '@mui/material';
import {styles} from '../styles'

export const Action = ({settings, handleIsOpen, data}:any) => {
    const dispatch = useDispatch();

    const handleSetData = () => {
        dispatch(modalReducer.actions.ADD_MODAL_ITEMS(data));
      
    };

    return (
        <div style={styles.actions}>
        {settings.actionsContent.map((btn:any, index:any) => <Button
            key={index}
            style={styles.btnActions}
            onClick={btn.click === 'handleClose' ? handleIsOpen : handleSetData}>
            {btn.text}
        </Button>)
        }
    </div>
    )
}