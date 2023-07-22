import React from 'react';
import AppNavigation from './navigation/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>  );
};

export default App;