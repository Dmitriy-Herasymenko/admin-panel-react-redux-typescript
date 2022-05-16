import {Send, Drafts} from '@mui/icons-material';
import {UsersList} from "../../pages/users";
import {TodosList} from "../../pages/todos";

export const links = [
    {
        title: 'Users',
        link: '/users',
        icon:  <Send  className='container__list-icon'/>
    },
    {
        title: 'Todos',
        link: '/todos',
        icon:  <Drafts className='container__list-icon'/>
    }
];

export const routes = [
    {
        path: '/users',
        component: <UsersList/>
    },
    {
        path: '/todos',
        component: <TodosList/>
    }
];
