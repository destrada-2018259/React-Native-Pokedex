import { FlatList, StyleSheet, Text } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonList( {pokemonList} ) {

  return (
    <FlatList
        data={pokemonList}
        numColumns={2}
        showsVerticalScrollIndicator={ false }
        keyExtractor={(poke) => String(poke.id)}
        // renderItem={({item}) => <Text> {item.name} </Text>}
        renderItem={({item}) => <PokemonCard pokemonItem ={item} />}
        contentContainerStyle={styles.flatListContentContainer}
    />
    
  )
}
const styles = StyleSheet.create({
    flatListContentContainer:{
        paddingHorizontal: 5
    }
})