/**
 * Esta clase está hecha con el patrón singleton ya que va a ser la clase encargada
 * de interactuar con la base de datos e interesa que sea la misma instancia siempre.
 * 
 * This class is made with singleton pattern since it will be the class in charge to
 * interact with the database and it is important that it es always the same instance.
 */
class Searchs {
	history = [];

	constructor() {
        //Check if it is the instance to return it
		if (Searchs.instance) {
			return Searchs.instance;
		}

		// The instance is marked as a singleton
		Searchs.instance = this;
	}

    set setHistory(history = '') {
        this.history.push(history)
    }

    get getHistory() {
        return this.history
    }
}

module.exports = Searchs;
