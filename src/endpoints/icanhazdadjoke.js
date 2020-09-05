// const got = require('got')
const axios = require('axios')

const USER_AGENT = 'Funniez - (repo TBD)'
const URI = 'https://icanhazdadjoke.com/'

/** Class representing joke objects from the icanhazdadjoke API */
class Joke {
    /**
     * Creates a new joke
     * @param {string} id The joke id from icanhazdadjoke
     * @param {string} joke The joke content from icanhazdadjoke
     */
    constructor(id, joke) {
        this.id = id
        this.joke = joke
    }

    /**
     * Returns a string representation of the joke
     * @return {string} The string representation of the joke
     */
    toString() {
        return `Joke: [${this.id}: ${this.joke}]`
    }
}

/**
 * getJoke fetches a single random joke
 * @type {function(): Joke}
 * @return {Joke} An object representing the joke
 */
const getJoke = async () => {
    const config = {
        headers: {
            'User-Agent': USER_AGENT,
            'Accept': 'application/json',
        }
    }

    const response = await axios.get(URI, config)

    return new Joke(response.data.id, response.data.joke)
}

/**
 * getJokeById fetches a single joke by its ID.
 * @type {function(string): Joke}
 * @param {string} id The id of the joke to fetch
 * @return {Joke} An object representing the joke
 */
const getJokeById = async (id) => {
    const config = {
        headers: {
            'User-Agent': USER_AGENT,
            'Accept': 'application/json',
        }
    }

    const response = await axios.get(URI + `j/${id}`, config)

    return new Joke(response.data.id, response.data.joke)
}
