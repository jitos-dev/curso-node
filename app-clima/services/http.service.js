const axios = require('axios')
const env = require('../helpers/enviroments')

class HttpService {

    get(url, config) {
        return axios.get(url, config)
    }

    post(url, data, config) {
        return axios.post(url, data, config)
    }


    put(url, data, config) {
        return axios.patch(url, data, config)
    }

    delete(url, config) {
        return axios.delete(url, config)
    }
}

module.exports = new HttpService();