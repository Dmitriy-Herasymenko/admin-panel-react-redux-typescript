import * as React from 'react';
import {List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {links, routes} from "../../modules/routes";
import {styles} from "./styles";


export const Sidebar: React.FC = () => {
    return (
        <div style={styles.container}>
            <BrowserRouter>
                <List
                    sx={styles.list}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    {
                        links.map((link, index) =>
                            <ListItemButton key={index}>
                                <ListItemIcon
                                    style={styles.listItemIcon}
                                >
                                    {link.icon}
                                </ListItemIcon>
                                <Link
                                    to={link.link}
                                    style={styles.link}
                                >
                                    <ListItemText
                                        primary={<span style={styles.listItemText}
                                        >{link.title}</span>}
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
