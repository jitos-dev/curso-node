

class Search {
    place_id = '';
    lat = '';
    lon = '';
    display_name = '';
    importance = 0.0

    constructor (place_id, lat, lon, display_name, importance) {
        this.place_id = place_id;
        this.lat = lat;
        this.lon = lon;
        this.display_name = display_name;
        this.importance = importance
    }

    showSearch(search = {}) {
        console.log('\nInformación de la ciudad:'.green);
        console.log('Ciudad: '.green, search.display_name);
        console.log('Latitud: '.green, search.lat);
        console.log('Longitud: '.green, search.lon);
    }
}

module.exports = new Search();