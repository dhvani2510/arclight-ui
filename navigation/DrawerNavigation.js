import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screen/DrawerScreens/HomeScreen';
import ProfileUpdateScreen from '../Screen/DrawerScreens/ProfileUpdateScreen';
import BasicLearning from '../Screen/DrawerScreens/BasicLearning';
import Quiz from '../Screen/DrawerScreens/Quiz';
import FunFacts from '../Screen/DrawerScreens/FunFacts';
import Scores from '../Screen/DrawerScreens/Scores';
import NavigationDrawerHeader from '../Screen/Components/NavigationDrawerHeader';
import CustomSliderMenu from '../Screen/Components/CustomSidebarMenu';

const Drawer = createDrawerNavigator();

const DrawerNavigation = (props) => {
  const navigation = props.navigation;
  // navigation.replace('DrawerNavigationRoutes');
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
        <Drawer.Navigator 
        screenOptions={{
          activeTintColor: '#fff',
          color: '#fff',
          itemStyle: {marginVertical: 5, color: 'white'},
          labelStyle: {
            color: '#d8d8d8',
          }
        }}
        drawerContent={CustomSliderMenu}>
          <Drawer.Screen options={headerOptions} name="Home" component={HomeScreen} />
          <Drawer.Screen options={headerOptions} name="BasicLearning" component={BasicLearning} />
          <Drawer.Screen options={headerOptions} name="Quiz" component={Quiz} />
          <Drawer.Screen options={headerOptions} name="FunFacts" component={FunFacts} />
          <Drawer.Screen options={headerOptions} name="Scores" component={Scores} />
          <Drawer.Screen options={headerOptions} name="Profile" component={ProfileUpdateScreen} />
        </Drawer.Navigator>
      );
}

export default DrawerNavigation;