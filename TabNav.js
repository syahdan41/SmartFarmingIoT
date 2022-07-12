import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SensorPage,SettPage,HomePage} from './StackNavigator';
import { StyleSheet,Text,View,Image,TouchableOpacity } from 'react-native';
import { create } from 'react-test-renderer';
import { useIsFocused } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function TabNav () {
  return(
        <Tab.Navigator screenOptions={{tabBarShowLabel:false, headerShown:false,tabBarStyle:{position:'absolute',
            bottom:25,
            left:20,
            right:20,
            elevation:0,
            backgroundColor:'#89D7B6',
            borderRadius:20,
            height:70,}}}>
            <Tab.Screen name = 'Home' component={HomePage} options={{
              tabBarIcon:({focused}) => (
                <View style={styles.homeContain}>
                  <Image source={require('./components/images/tabicon/home.png')}
                    resizeMode='contain'
                    style = {{
                      height:20,
                      width:20,
                      tintColor:focused ? '#fff':'#000'
                    }}
                  />
                  <Text style = {{
                    fontSize:12,
                    color:focused ? '#fff':'#000'
                  }}>HOME</Text>
                </View>
              )
            }}/>
            <Tab.Screen name='Sensor' component={SensorPage} options={{
              tabBarIcon:({focused}) => (
                <View style={styles.homeContain}>
                  <Image source={require('./components/images/tabicon/info.png')}
                    resizeMode='contain'
                    style = {{
                      height:20,
                      width:20,
                      tintColor:focused ? '#fff':'#000'
                    }}
                  />
                  <Text style = {{fontSize:12,color:focused ? '#fff':'#000'}}>INFO</Text>
                </View>
              )
            }} />
            <Tab.Screen name='Pengaturan' component={SettPage} options={{
              tabBarIcon:({focused}) => (
                <View style={styles.homeContain}>
                  <Image source={require('./components/images/tabicon/settings.png')}
                    resizeMode='contain'
                    style = {{
                      height:20,
                      width:20,
                      tintColor:focused ? '#fff':'#000'
                    }}
                  />
                  <Text style = {{fontSize:12,color:focused ? '#fff':'#000'}} >SETTINGS</Text>
                </View>
              )
            }}/>
        </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  homeContain:{
    justifyContent:'center',
    alignItems:'center',

  },

})

export default TabNav;