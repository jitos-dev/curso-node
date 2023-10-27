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

    async getWeather(city) {
        try {
            const { lat } = city;
            const { lon } = city;
            const appid =  enviroments.openWeatherKey;
            const lang = enviroments.openWeatherLanguage;
            const urlBase = enviroments.openWeatherUrl;

            let { data } = await httpService.get(urlBase, {
                params: {
                    lat,
                    lon,
                    lang,
                    appid,
                    units: 'metric'
                }
            })

            const { main, wind, cod, weather} = data;

            return formatWeather(main, wind, cod, weather);

        } catch (error) {
            console.log('Ha ocurrido un error al mostrar los datos del tiempo');
        }
    }

    
}

const formatLocationData = (data = []) => {
    return data.map(place => {
        const { place_id, lat, lon, display_name, importance} = place
        return { place_id, lat, lon, display_name, importance}
    })
}

const formatWeather = (main, wind, cod, weather) => {
    // Main
    const temperature = Math.round(main.temp) // grados centigrados
    const thermalSensation = Math.round(main.feels_like) // grados centigrados
    const tempMin = Math.round(main.temp_min) // grados centigrados
    const tempMax = Math.round(main.temp_max)// grados centigrados
    const humidity = Math.round(main.humidity) // %

    // Weather
    const weaderDescription = weather[0].description
    
    // Wind
    const { speed } = wind; // meter/sec
    const windGust  = wind.gust; // rafaga de viento. meter/sec

    const statusCode = cod;

    return {
        temperature,
        thermalSensation,
        tempMin,
        tempMax,
        humidity,
        weaderDescription,
        speed,
        windGust,
        statusCode
    }
}



module.exports = new RequestService();
