import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

import Landing from './src/screens/Landing';
import Daftarpage1 from './src/screens/Daftarpage1';
import Lupapw from './src/screens/Lupapw';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import InfoLahan from './src/screens/InfoLahan';
import InfoLahan2 from './src/screens/InfoLahan2';
import InfoLahan3 from './src/screens/infoLahan3';
import InfoSensor from './src/screens/InfoSensor';
import Settings from './src/screens/Settings';
import TabNav from './TabNav';
import EditProfile from './src/screens/EditProfile';
import About from './src/screens/About';
import WaterLevel from './src/screens/WaterLevel';
import Kelembaban from './src/screens/Kelembaban';
import Suhu from './src/screens/Suhu';
import Humid from './src/screens/Humid';
import Light from './src/screens/Light';


const Stack = createNativeStackNavigator();

function MainStack(){
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user){
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(()=>{
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber
  },[]);
  if (initializing) return null;

  if (!user){
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name = 'Login' component={Login}/>
     </Stack.Navigator>
    
  }
  return(
      <Stack.Navigator initialRouteName='Landing' screenOptions={{headerShown:false}}>
        <Stack.Screen name = 'Landing' component={Landing}/>
        <Stack.Screen name = 'Daftar1' component={Daftarpage1}/>
        <Stack.Screen name = 'lupaPw' component={Lupapw}/>
        <Stack.Screen name = 'Login' component={Login}/>        
        <Stack.Screen name = 'Infolhn' component={InfoLahan}/>
        <Stack.Screen name = 'Infolhn2' component={InfoLahan2}/>
        <Stack.Screen name = 'Infolhn3' component={InfoLahan3}/>
        <Stack.Screen name = 'Edit' component={EditProfile}/>
        <Stack.Screen name = 'About' component={About}/>
        <Stack.Screen name = 'Water' component={WaterLevel}/>
        <Stack.Screen name = 'Humid' component={Kelembaban}/>
        <Stack.Screen name = 'Temp' component={Suhu}/>
        <Stack.Screen name = 'HomeScreen' component={TabNav}/>
        <Stack.Screen name = 'AirHumid' component={Humid}/>
        <Stack.Screen name = 'LightIntens' component={Light}/>
      </Stack.Navigator>
  );
}


function SensorPage () {
  return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Sensors' component={InfoSensor} />
        </Stack.Navigator>
  );
}

function SettPage () {
  return(
        <Stack.Navigator screenOptions={{headerShown:false, tabBarStyle:{display:'none'}}}>
            <Stack.Screen name='Settings' component={Settings} />
        </Stack.Navigator>
  );
}

function HomePage () {
  return(
        <Stack.Navigator initialRouteName='Landing' screenOptions={{headerShown:false}}>
            <Stack.Screen name='HomePage' component={Home} />
        </Stack.Navigator>
  );
}


export {MainStack,SensorPage,SettPage,HomePage};