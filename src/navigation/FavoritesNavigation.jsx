import { createStackNavigator } from "@react-navigation/stack"
import FavoriteScreen from "../screens/FavoriteScreen";
import PokedexScreen from "../screens/PokedexScreen";
import AccountScreen from "../screens/AccountScreen";

const Stack = createStackNavigator();


export default function FavoritesNavigation(){
        return (
            <Stack.Navigator>
                <Stack.Screen name='Favorite'
                    component={FavoriteScreen}
                    options={{ title: 'Favorites' }}
                />
            </Stack.Navigator>
        )
}
