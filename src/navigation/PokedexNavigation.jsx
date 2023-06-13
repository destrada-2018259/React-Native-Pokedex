import { createStackNavigator } from "@react-navigation/stack"
import FavoriteScreen from "../screens/FavoriteScreen";
import PokedexScreen from "../screens/PokedexScreen";
import AccountScreen from "../screens/AccountScreen";
import PokemonScreen from "../screens/PokemonScreen";


const Stack = createStackNavigator();

export default function PokedexNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Pokédex'
                component={PokedexScreen}
                options={{ title: '', headerTransparent: true }}
            />
            <Stack.Screen name='Pokémon'
                component={PokemonScreen}
                options={{ title: 'Pokémon' }}
            />
        </Stack.Navigator>
    )
}