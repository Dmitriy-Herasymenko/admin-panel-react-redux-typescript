import * as React from 'react';
import {Header} from '../../components/header/index';
import {Sidebar} from '../../components/drawer/index';
import Box from '@mui/material/Box';

interface Props {
    window?: () => Window;
}

export const ResponsiveDrawer = (props: Props) => {

    return (
        <Box>
            <Header/>
            <Sidebar/>
        </Box>
    );
}
