import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../Screen/SplashScreen';
import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigation';

// Import Screens
import LoginScreen from '../Screen/Login';
import RegisterScreen from '../Screen/RegisterScreen';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

const Auth = () => {
  const headerOptions = {
    headerStyle: {
      backgroundColor: 'gold', //Set Header color
    },
    headerTintColor: '#fff', //Set Header text color
    headerTitleStyle: {
      fontWeight: 'bold', //Set Header text style
      fontSize: 24,
    }
  };
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{...headerOptions,
          title: 'Sign Up', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

export default function AppNavigation() {
  let token = null;
  AsyncStorage.getItem('access-token').then((value => token = value)); // Get the authentication status from the Redux store
  const isUserAuthenticated = token === null ? false : true;
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 3 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        { isUserAuthenticated ? (<Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />)
        : (<Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigation}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />)
      }
      </Stack.Navigator>
    </NavigationContainer>
    );
}