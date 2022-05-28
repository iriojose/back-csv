const axios = require('axios');

/**
 * @param {string} baseURL The URL to request
 * @param {string} authorization The authorization key
 * @return Intance
 */
const createAxios = function (baseURL, authorization){
    console.log("[AXIOS] call from URL: "+baseURL)

    const instance = axios.create({
        baseURL: baseURL,
        withCredentials: true,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'authorization': authorization
        },
        params:{}
    });

    instance.interceptors.request.use(function (config) {
        return config;
    }, function (error) {
        return Promise.reject(error)
    })

    return instance;
}


module.exports = {
    createAxios
};