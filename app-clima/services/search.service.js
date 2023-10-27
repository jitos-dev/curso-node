


class SearchService {
    cities = []

    constructor(data = []) {
        this.cities = data
    }

    get(){
        return this.cities;
    }

    set(city = {}) {
        this.cities.push(city)
    }
}

module.exports = new SearchService();