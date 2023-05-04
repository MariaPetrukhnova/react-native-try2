import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from './Screens/HomeScreen';
import LoginView from './Screens/LoginScreen';
import RegistrationView from './Screens/RegistrationScreen';
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
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="Signup" component={RegistrationView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

