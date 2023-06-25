import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/routes/MainStack';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();

export default function App() {

  let [fontsLoaded] = useFonts({
    "Montserrat-Black": require("./src/assets/fonts/Montserrat-Black.ttf"),
    "Montserrat-Bold": require("./src/assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Light": require("./src/assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Regular": require("./src/assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./src/assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null
  } else {
    SplashScreen.hideAsync();

    return (
      <NavigationContainer>
        <StatusBar style="light" />
        <MainStack />
      </NavigationContainer>
    );
  }

}

