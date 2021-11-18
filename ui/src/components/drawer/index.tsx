import * as React from 'react';
import {List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {links, routes} from "../../modules/routes";


export const Sidebar: React.FC = () => {
    return (
        <div style={{display: 'flex', backgroundColor: '#f0f0f8', padding: '20px'}}>
            <BrowserRouter>
                <List
                    sx={{width: '100%', maxWidth: 150, height: '100vh', bgcolor: '#f0f0f8'}}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    {
                        links.map(link =>
                            <ListItemButton>
                                <ListItemIcon
                                    style={{color: '#6200ee', minWidth: '30px'}}
                                >
                                    {link.icon}
                                </ListItemIcon>
                                <Link
                                    to={link.link}
                                    style={{textDecoration: 'none'}}
                                >
                                    <ListItemText
                                        primary={<span style={{
                                            color: '#000',
                                            fontSize: '14px',
                                            fontWeight: 'normal'
                                        }}
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
