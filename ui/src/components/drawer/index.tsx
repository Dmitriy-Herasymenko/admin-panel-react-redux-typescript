import * as React from 'react';
import {List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {links, routes} from "../../modules/routes";

export const Sidebar: React.FC = () => {
    return (
        <div style={{display: 'flex'}}>
            <BrowserRouter>
                <List
                    sx={{width: '100%', maxWidth: 360, height: '100vh', bgcolor: '#f0f0f8'}}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    {
                        links.map(link =>
                            <ListItemButton>
                                <ListItemIcon style={{color: '#6200ee'}}>
                                    {link.icon}
                                </ListItemIcon>
                                <Link to={link.link}><ListItemText primary={link.title}/></Link>
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
