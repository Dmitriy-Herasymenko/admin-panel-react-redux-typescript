import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hooks/redux";
import {getUsers} from "../../store/reducers/users/actions";
import {BasicTable} from "../../modules/table";

const columns = [
    {title: 'Name', key: 'name'},
    {title: 'Email', key: 'email'},
    {title: 'Username', key: 'username'},
    {title: 'Phone', key: 'phone'},
    {title: 'Website', key: 'website'}
];

export const UsersList: React.FC = () => {
    const dispatch = useDispatch();
    const {users, loading, error} = useAppSelector(state => state.usersReducer);

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>{error}</h1>;

    return (
        <BasicTable columns={columns} rows={users} />
    );
};
