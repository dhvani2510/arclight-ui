import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomSliderMenu from '../Screen/Components/CustomSidebarMenu';
import NavigationDrawerHeader from '../Screen/Components/NavigationDrawerHeader';

import HomeScreen from '../Screen/DrawerScreens/HomeScreen';
import ProfileUpdateScreen from '../Screen/DrawerScreens/ProfileUpdateScreen';
import BasicLearning from '../Screen/DrawerScreens/BasicLearning';
import Quiz from '../Screen/DrawerScreens/Quiz';
import FunFacts from '../Screen/DrawerScreens/FunFacts';
import Scores from '../Screen/DrawerScreens/Scores';
import ContentScreen from '../Screen/ContentScreen';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  const headerOptions = {
    headerLeft: () => (
      <NavigationDrawerHeader/>
    ),
    headerStyle: {
      backgroundColor: 'gold', //Set Header color
    },
    headerTintColor: '#fff', //Set Header text color
    headerTitleStyle: {
      fontWeight: 'bold', //Set Header text style
    }
  };
  return (
    <Drawer.Navigator initialRouteName="Home" 
    screenOptions={{
      activeTintColor: '#fff',
      color: '#fff',
      itemStyle: {marginVertical: 5, color: 'white'},
      labelStyle: {
        color: '#d8d8d8',
      }
    }}
    drawerContent={CustomSliderMenu}
    >
        <Drawer.Screen options={headerOptions} name="Home" component={HomeScreen} />
        <Drawer.Screen options={headerOptions} name="BasicLearning" component={BasicLearning} />
        <Drawer.Screen options={headerOptions} name="Quiz" component={Quiz} />
        <Drawer.Screen options={headerOptions} name="FunFacts" component={FunFacts} />
        <Drawer.Screen options={headerOptions} name="Scores" component={Scores} />
        <Drawer.Screen options={headerOptions} name="Profile" component={ProfileUpdateScreen} />
        <Drawer.Screen name="ContentScreen" component={ContentScreen}
            options={{
                headerShown: false,
                drawerItemStyle: {display: 'none'}
            }}
        />
    </Drawer.Navigator>
  );
};

export default DrawerNav;