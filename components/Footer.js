import { View, Text, Image} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home'
import SettingsScreen from './Settings';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Stack = createBottomTabNavigator();

function HomeScreen2() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Scree</Text>
        </View>
    );
}

function LogoTitle() {
    return (
        <View style={{ display: 'inline' , alignItems: 'center', justifyContent: 'space-between'}}>
            <Text>headerTitle</Text>
            <Image style={{ width: 50, height: 50, alignSelf: 'center' }}
                source={require('../assets/images/icon.png')} />
        </View>
    );
  }
  

export default function Footer()  {
    return (
            <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "#ffffff",
                tabBarActiveBackgroundColor: "#F9D949",
                tabBarInactiveTintColor: '#F9D949',
                tabBarInactiveBackgroundColor: '#ffffff',
                headerTitle: (props) => <LogoTitle {...props}  />
            }} 
            options={{
                
            }}>
                <Stack.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({color,  size}) => (
                        <MaterialCommunityIcons name='home' color={color} size={size} />
                    )
                    }}
                />
                <Stack.Screen name="Profile" component={SettingsScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({color,  size}) => (
                        <MaterialCommunityIcons name='account' color={color} size={size} />
                    )
                    }}
                />
            </Stack.Navigator>
    );
}
