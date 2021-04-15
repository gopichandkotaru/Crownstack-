import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SplashScreen from '../screens/SplashScreen';
import SongList from '../screens/SongList';
import DetailScreen from '../screens/DetailScreen';


const Stack = createStackNavigator();

const AppNavigator = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Song" component={SongList} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
};

export default AppNavigator;