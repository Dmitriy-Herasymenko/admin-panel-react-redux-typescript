import * as React from "react";
import {Send, Drafts} from '@mui/icons-material';
import {UsersList} from "../../components/users";
import {TodosList} from "../../components/todos";

export const links = [
    {
        title: 'Users',
        link: '/users',
        icon:  <Send />
    },
    {
        title: 'Todos',
        link: '/todos',
        icon:  <Drafts />
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
