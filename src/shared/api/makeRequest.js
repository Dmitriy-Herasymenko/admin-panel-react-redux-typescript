import axios from 'axios';
import {config} from './config';

export const  makeRequest = async ({
    url = config.baseUrl,
    method = '',
    params = {},
    data = {},
    headers = {
        ...headers,
        authorization: config.token

    }

}) => {
    if(headers && headers.authorization) {
        headers.authorization = config.token
    }
    return axios({
        url: config.baseUrl + url,
        method,
        headers,
        params,
        data
    });
};