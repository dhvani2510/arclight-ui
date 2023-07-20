import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screen/DrawerScreens/HomeScreen';
import ProfileUpdateScreen from '../Screen/ProfileUpdateScreen';
import BasicLearning from '../Screen/DrawerScreens/BasicLearning';
import Quiz from '../Screen/DrawerScreens/Quiz';
import FunFacts from '../Screen/DrawerScreens/FunFacts';
import Scores from '../Screen/DrawerScreens/Scores';
import NavigationDrawerHeader from '../Screen/Components/NavigationDrawerHeader';
import { useNavigation } from '@react-navigation/native';


const Drawer = createDrawerNavigator();

const DrawerNavigation = (props) => {
  const navigation = props.navigation;
  // navigation.replace('DrawerNavigationRoutes');
  const headerOptions = {
    // headerLeft: () => (
    //   <NavigationDrawerHeader navigationProps={navigation} />
    // ),
    headerStyle: {
      backgroundColor: 'gold', //Set Header color
    },
    headerTintColor: '#fff', //Set Header text color
    headerTitleStyle: {
      fontWeight: 'bold', //Set Header text style
    }
  };
    return (
        <Drawer.Navigator initialRouteName="Home">
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