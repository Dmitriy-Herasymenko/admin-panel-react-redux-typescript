import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";

export const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector( state => state.users);
    console.log("state", users)
    return (
        <div>
            
        </div>
    );
};
