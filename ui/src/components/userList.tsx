import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/action-creator/user";

export const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector( state => state.users);
    const dispatch = useDispatch();
    console.log("users", users)
    useEffect(() => {
        dispatch(fetchUsers())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>{error}</h1>;

    return (
        <div>
            {users.map((user, index) =>
                <div key={index}>{user.name}</div>
            )}
        </div>
    );
};
