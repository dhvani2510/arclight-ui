import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../Screen/Login';
import RegisterScreen from '../Screen/RegisterScreen';

const Stack = createStackNavigator();

const NonAuthorizedNavigation = () => {
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

export default NonAuthorizedNavigation;
