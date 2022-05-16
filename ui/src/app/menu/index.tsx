import {Header} from '../header';
import {Sidebar} from '../drawer';
import './style.scss';

interface Props {
    window?: () => Window;
}

export const ResponsiveDrawer = (props: Props) => {

    return (
        <div className='wrapper'>
            <Header/>
            <Sidebar/>
        </div>
    );
}
