import {useDispatch} from "react-redux";
import {modalReducer} from '../../../store/reducers/modal/modalReducer'
import {
    Button
} from '@mui/material';
import {IModalSettings} from '../../../types/modal'
import {styles} from '../styles'

interface IProps {
    settings: IModalSettings,
    handleIsOpen?: () => void,
    data: any
}

export const Action: React.FC<IProps> = ({settings, handleIsOpen, data}) => {
    const dispatch = useDispatch();

    const handleSetData = () => {
        dispatch(modalReducer.actions.ADD_MODAL_ITEMS(data));
        console.log("dtata", data)
    };

    return (
        <div style={styles.actions}>
        {settings.actionsContent.map((btn, index:number) => <Button
            key={index}
            style={styles.btnActions}
            onClick={btn.click === 'handleClose' ? handleIsOpen : handleSetData}>
            {btn.text}
        </Button>)
        }
    </div>
    )
}