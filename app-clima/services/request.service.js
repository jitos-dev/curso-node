const env = require('../helpers/enviroments');
const enviroments = require('../helpers/enviroments')
const httpService = require('./http.service')

class RequestService {

    async getLocation(city) {

        try {
            const baseUrl = enviroments.locationIqUrl;
            const limit = enviroments.locationIqLimit;
            const language = enviroments.locationIqLanguage;
            const key = enviroments.locationIqToken;
    
            let {data, status } = await httpService.get(baseUrl, {
                headers: {'accept': 'application/json'},
                params: {
                    q: city,
                    format: 'json',
                    limit,
                    'accept-lange': language,
                    key
                }
            })
    
            data = formatLocationData(data)
    
            return {data, status}

        } catch (error) {
            const { status } = error.response;
            
            return {
                data: [],
                status
            }
        }

    }

    
}

const formatLocationData = (data = []) => {
    return data.map(place => {
        const { place_id, lat, lon, display_name, importance} = place
        return { place_id, lat, lon, display_name, importance}
    })
}

module.exports = new RequestService();
