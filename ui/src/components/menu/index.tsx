import * as React from 'react';
import {Header} from '../header';
import {Sidebar} from '../drawer';
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
