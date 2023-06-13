// On this file we use fetch to use our api

import { API_HOST } from "../utils/constants";


export const getPokemonsApi = async() => {
    try {

        const URL = `${API_HOST}/pokemon?limit=20&offset=0`;
        const response = await fetch(URL)
        const result = await response.json()
        return result;
    } catch (error) {
        throw error;
    }
}

export const getPokemonDetailByUrlApi = async( url ) =>{
    try {
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        throw error;
    }
}
