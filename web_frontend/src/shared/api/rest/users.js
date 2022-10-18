import {makeRequest} from "../makeRequest";

export const users = async (data) => {
    return await makeRequest({
        url: 'users',
        method: 'GET',
        headers: {authorization: false},
        data
    })
}