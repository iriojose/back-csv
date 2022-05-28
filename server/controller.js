const axios = require('./axios');
const util = require('./utils');

const getCSV = async(req) => {
    const connection = axios.createAxios('https://echo-serv.tbxnet.com/v1','Bearer aSuperSecretKey');
    const response = await connection.get('/secret/files');
    let filenames = response.data.files;

    if(req.query.filename) {
        filenames = filenames.filter(item => item === (req.query.filename + '.csv'));
    }

    const all = await Promise.all(filenames.map(async(file)=> {
        const data = await connection.get(`/secret/file/${file}`).then(async(res) => {
            return await util.processCSV(res.data);
        }).catch(() => {
            console.log(`this file could not be downloaded, ${file}`);
        });

        return data;
    }))

    return all.filter((a => a && Object.keys(a).length > 0));
}

const getFilenames = async() => {
    const connection = axios.createAxios('https://echo-serv.tbxnet.com/v1','Bearer aSuperSecretKey');
    const response = await connection.get('/secret/files');
    return response.data.files;
}


module.exports = {
    getCSV,
    getFilenames
};