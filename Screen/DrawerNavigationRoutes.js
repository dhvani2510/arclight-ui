import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './DrawerScreens/HomeScreen';
import SettingsScreen from './DrawerScreens/SettingsScreen';
import ProfileUpdateScreen from './ProfileUpdateScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
import BasicLearning from './DrawerScreens/BasicLearning';
import Quiz from './DrawerScreens/Quiz';
import FunFacts from './DrawerScreens/FunFacts';
import Scores from './DrawerScreens/Scores';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: 'gold', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const SettingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: 'gold', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileUpdateScreen}
        options={{
          title: 'Profile', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: 'gold', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};


const BasicLearningStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="BasicLearning">
      <Stack.Screen
        name="BasicLearning"
        component={BasicLearning}
        options={{
          title: 'Basic Learning', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: 'gold', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const QuizStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Quiz">
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{
          title: 'Quiz', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: 'gold', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const FunFactsStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="FunFacts">
      <Stack.Screen
        name="FunFacts"
        component={FunFacts}
        options={{
          title: 'Fun Facts', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: 'gold', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const ScoresStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Scores">
      <Stack.Screen
        name="Scores"
        component={Scores}
        options={{
          title: 'Score Board', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: 'gold', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        activeTintColor: '#fff',
        color: '#fff',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
        headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Home'}}
        component={HomeScreenStack}
      />
      <Drawer.Screen
        name="BasicLearningStack"
        options={{drawerLabel: 'Basic Learning'}}
        component={BasicLearningStack}
      />
      <Drawer.Screen
        name="QuizStack"
        options={{drawerLabel: 'Quiz'}}
        component={QuizStack}
      />
      <Drawer.Screen
        name="FunFactsStack"
        options={{drawerLabel: 'Fun Facts'}}
        component={FunFactsStack}
      />
      <Drawer.Screen
        name="ScoresStack"
        options={{drawerLabel: 'Scores'}}
        component={ScoresStack}
      />
      <Drawer.Screen
        name="profileScreenStack"
        options={{drawerLabel: 'Profile'}}
        component={ProfileScreenStack}
      />
      <Drawer.Screen
        name="settingScreenStack"
        options={{drawerLabel: 'Settings'}}
        component={SettingScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;