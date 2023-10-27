/**
 * Esta clase está hecha con el patrón singleton ya que va a ser la clase encargada
 * de interactuar con la base de datos e interesa que sea la misma instancia siempre.
 * 
 * This class is made with singleton pattern since it will be the class in charge to
 * interact with the database and it is important that it es always the same instance.
 */
class Searchs {
	history = [];
    cities = [];

	constructor() {
        //Check if it is the instance to return it
		if (Searchs.instance) {
			return Searchs.instance;
		}

		// The instance is marked as a singleton
		Searchs.instance = this;
	}

    set setHistory(search) {
        // remove duplicated objects
        this.history = this.history.filter(city => {
            console.log('city: ', city.place_id);
            console.log('search ', search.place_id);
            return city.place_id !== search.place_id
        })

        // just five elements in the array
        if (this.history.length === 5) {
            this.history.pop(); //elimina el último elemento del array
        }

        this.history.unshift(search) //agregamos al principio
    }

    get getHistory() {
        return this.history
    }

    set setCities(history) {
        this.cities.push(history)
    }

    get getCities() {
        return this.cities
    }
}

module.exports = Searchs;
