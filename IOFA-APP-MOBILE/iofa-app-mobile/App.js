import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import auth from "@react-native-firebase/auth"
import database from "@react-native-firebase/database"
import HomeScreen from './Screens/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pump from './Screens/SubScreens/Pump';
import PumpWatering from './Screens/SubScreens/PumpWatering';
import DashbardAndMap from './Screens/SubScreens/DashbardAndMap';
import WeatherTank from './Screens/SubScreens/WeatherTank';
import SoilCondition from './Screens/SubScreens/SoilCondition';
import Maintenance from './Screens/SubScreens/Maintenance';
import AerialSurvey from './Screens/SubScreens/AerialSurvey';
import Surveillance from './Screens/SubScreens/Surveillance';
import Aquaculture from './Screens/SubScreens/Aquaculture';
import Loading from './Screens/Auth/Loading';
import Login from './Screens/Auth/Login';
import Register from './Screens/Auth/Register';
import Reset from './Screens/Auth/PasswordReset';
import Home from './Screens/Home';
import Notifications from './Screens/Notifications';

const Stack = createNativeStackNavigator();

export default function App() {

  const globalHeaderOptions = {
    headerShown: false,
  }

  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);

  LogBox.ignoreAllLogs()
  useEffect(() => {
    const usersRef = database();
    auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .ref(`users/${user.uid}`)
          .once('value')
          .then((snapshot) => {
            const userData = snapshot.val();
            setUser(true);
            setLoading(false);
          })
          .catch(() => {
            setLoading(false)
          });
      }
      else {
        setUser(false);
        setLoading(false);
      }
    })
  }, [user])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loading ?
          <Stack.Screen name="Loading" component={Loading} options={globalHeaderOptions} />
          :
          <>
            {!user ?
              <>
                <Stack.Screen name="Login" component={Login} options={globalHeaderOptions} />
                <Stack.Screen name="Register" component={Register} options={globalHeaderOptions} />
                <Stack.Screen name="Reset" component={Reset} options={globalHeaderOptions} />
              </>
              :
              <>
                <Stack.Screen name="Main" component={Home} options={globalHeaderOptions} />
                <Stack.Screen name="Notifications" component={Notifications} options={globalHeaderOptions} />
                <Stack.Screen name="PumbScreen" component={Pump} options={globalHeaderOptions} />
                <Stack.Screen name="PumpWatering" component={PumpWatering} options={globalHeaderOptions} />
                <Stack.Screen name="DashbardAndMap" component={DashbardAndMap} options={globalHeaderOptions} />
                <Stack.Screen name="WeatherTank" component={WeatherTank} options={globalHeaderOptions} />
                <Stack.Screen name="SoilCondition" component={SoilCondition} options={globalHeaderOptions} />
                <Stack.Screen name="Maintenance" component={Maintenance} options={globalHeaderOptions} />
                <Stack.Screen name="AerialSurvey" component={AerialSurvey} options={globalHeaderOptions} />
                <Stack.Screen name="Surveillance" component={Surveillance} options={globalHeaderOptions} />
                <Stack.Screen name="Aquaculture" component={Aquaculture} options={globalHeaderOptions} />
              </>
            }
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );

}