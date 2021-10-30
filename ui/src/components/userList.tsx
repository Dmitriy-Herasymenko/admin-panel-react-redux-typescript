import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/action-creator/user";
import {useActions} from "../hooks/useActions";

export const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector( state => state.users);
    const {fetchUsers} = useActions();
    console.log("users", users)
    useEffect(() => {
        fetchUsers()
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
