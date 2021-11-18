import * as React from "react";
import {Send, Drafts} from '@mui/icons-material';
import {UsersList} from "../../components/users";
import {TodosList} from "../../components/todos";

export const links = [
    {
        title: 'Users',
        link: '/users',
        icon:  <Send  style={{fontSize: '1rem'}}/>
    },
    {
        title: 'Todos',
        link: '/todos',
        icon:  <Drafts style={{fontSize: '1rem'}}/>
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
