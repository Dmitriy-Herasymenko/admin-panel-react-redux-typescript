import * as React from 'react';
import {Header} from '../header';
import {Sidebar} from '../drawer';

interface Props {
    window?: () => Window;
}

export const ResponsiveDrawer = (props: Props) => {

    return (
        <>
            <Header/>
            <Sidebar/>
        </>
    );
}
