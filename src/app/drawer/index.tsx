import * as React from 'react';
import {List, ListItemButton, ListItemIcon, ListItemText, ListItemAvatar, Avatar} from '@mui/material';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {links, routes} from "../routes";
import "./styles.scss";


export const Sidebar: React.FC = () => {
    return (
        <div className='container'>
            <BrowserRouter>
                <List
                    className='container__list'
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    {
                        links.map((link, index) =>
                            <ListItemButton key={index}>
                                <ListItemIcon
                                    className='container__list-icon'
                                >
                                    {link.icon}
                                </ListItemIcon>
                                <Link
                                    to={link.link}
                                    className='container__list-link'
                                >
                                    <ListItemText
                                        primary={<span  className='container__list-text'>{link.title}</span>}
                                    />
                                </Link>
                            </ListItemButton>
                       )}
                </List>
                <Switch>
                    {routes.map((route, index) => <Route path={route.path} children={route.component} key={index}/>)}
                </Switch>
            </BrowserRouter>
        </div>
    );
}
