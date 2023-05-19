import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartView from './Screens/StartScreen';
import LoginView from './Screens/LoginScreen';
import RegistrationView from './Screens/RegistrationScreen';
import HomeView from './Screens/HomeScreen'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from '@expo-google-fonts/roboto';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });
  
  if (!fontsLoaded) {
    return null;
  };
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Start" component={StartView} />
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="Signup" component={RegistrationView} />
        <Stack.Screen name="Home" component={HomeView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

