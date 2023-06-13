import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { Component } from 'react'
import { Image } from 'react-native';
import Account from '../screens/AccountScreen';
import Pokedex from '../screens/PokedexScreen';
import Favorite from '../screens/FavoriteScreen';
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/FontAwesome5'
import pokeball from '../assets/pokeball.png'
import AccountNavigation from './AccountNavigation';
import FavoritesNavigation from './FavoritesNavigation';
import PokedexNavigation from './PokedexNavigation';

export default class Navigation extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name='account' component={AccountNavigation} options={{
          tabBarLabel: "My Account",
          tabBarIcon: ({ color, size }) => (
            <Icon name='user' color={color} size={size} />
          )
        }} />
        <Tab.Screen name='Pokédex' component={PokedexNavigation} options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball()
        }} />

        <Tab.Screen name='Favorite' component={FavoritesNavigation} options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Icon name='heart' color={color} size={size} />
          )
        }} />
      </Tab.Navigator>
    )
  }
}

//Rendering Pokeball on menu tab

const renderPokeball = () => {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style= {{width: 40, height: 40, padding: 10}}
    />
  )
}