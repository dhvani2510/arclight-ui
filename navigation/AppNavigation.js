import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../Screen/SplashScreen';
import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNav from './DrawerNav';
import AuthNavigation from './AuthNavigation';

// Import Screens
import LoginScreen from '../Screen/Login';
import RegisterScreen from '../Screen/RegisterScreen';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

export default function AppNavigation() {
  let token = null;
  AsyncStorage.getItem('access-token').then((value => token = value)); // Get the authentication status from the Redux store
  const isUserAuthenticated = token === null ? false : true;
    return (
      <Stack.Navigator>
      <Stack.Screen name="Auth" component={AuthNavigation} options={{headerShown: false}}/>
      <Stack.Screen name="App" component={DrawerNav} options={{headerShown:false}}/>
    </Stack.Navigator>
    );
}