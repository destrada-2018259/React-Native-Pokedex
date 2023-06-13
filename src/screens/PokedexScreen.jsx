import React, { Component, useEffect, useState } from 'react'
import { Text, SafeAreaView } from 'react-native'
import { getPokemonsApi, getPokemonDetailByUrlApi } from '../api/pokemon'
import PokemonList from '../components/PokemonList';

export default function PokedexScreen() {

  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {

    (async () => {
      await loadPokemons();
    })();
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      const pokemonsArray = [];
      for await (const poke of response.results) {
        const pokemonDetail = await getPokemonDetailByUrlApi(poke.url);
        pokemonsArray.push({
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          type: pokemonDetail.types[0].type.name,
          order: pokemonDetail.order,
          image: pokemonDetail.sprites.other['official-artwork'].front_default
        })
      }
      setPokemons([...pokemons, ...pokemonsArray])
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <SafeAreaView>
      <PokemonList pokemonList={pokemons} />
    </SafeAreaView>
  )
}
