import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign'
import Profile from './TabScreens/Profile';
import Hero from './HomeScreen';
import Colors from '../src/depen/Colors';
import Message from './TabScreens/Message';

const Tab = createBottomTabNavigator();
const globalHeaderOptions = {
  headerShown: false,
}
const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home'
          } else if (route.name === 'Message') {
            iconName = 'mail'
          }
          else if (route.name === 'Profile') {
            iconName = 'user';
          }
          return <Icon name={iconName} size={26} color={color} />;
        },
        tabBarActiveTintColor: Colors.green,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 73,
          backgroundColor: Colors.dark,
          position: 'absolute',
          paddingBottom: 10,
          borderTopColor: 'gray',
        }
      })}
    >
      <Tab.Screen name="Home" component={Hero} options={globalHeaderOptions} />
      <Tab.Screen name="Message" component={Message} options={globalHeaderOptions} />
      <Tab.Screen name="Profile" component={Profile} options={globalHeaderOptions} />
    </Tab.Navigator>
  )
}
export default Home;