import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import { MercurioScreen } from '../screens/MercurioScreen';
import { MainScreen } from '../screens/MainScreen';
import { VenusScreen } from '../screens/VenusScreen';
import { SplashScreen } from '../screens/SplashScreen';
import { TerraScreen } from '../screens/TerraScreen';
import { MarteScreen } from '../screens/MarteScreen';
import { JupiterScreen } from '../screens/JupiterScreen';
import { SaturnoScreen } from '../screens/SaturnoScreen';
import { UranoScreen } from '../screens/UranoScreen';
import { NetunoScreen } from '../screens/NetunoScreen';


const Stack = createStackNavigator();

export const MainStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="SplashScreen"
        >
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="MercurioScreen" component={MercurioScreen} options={{ gestureEnabled: true }}/>
            <Stack.Screen name="VenusScreen" component={VenusScreen} options={{ gestureEnabled: true }}/>
            <Stack.Screen name="TerraScreen" component={TerraScreen} options={{ gestureEnabled: true }}/>
            <Stack.Screen name="MarteScreen" component={MarteScreen} options={{ gestureEnabled: true }}/>
            <Stack.Screen name="JupiterScreen" component={JupiterScreen} options={{ gestureEnabled: true }}/>
            <Stack.Screen name="SaturnoScreen" component={SaturnoScreen} options={{ gestureEnabled: true }}/>
            <Stack.Screen name="UranoScreen" component={UranoScreen} options={{ gestureEnabled: true }}/>
            <Stack.Screen name="NetunoScreen" component={NetunoScreen} options={{ gestureEnabled: true }}/>
        </Stack.Navigator>
    );
}
