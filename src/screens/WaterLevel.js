import React, { Component, useState,useEffect } from 'react';
import {Alert, ScrollView,StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const WaterLevel = () => {
    const navigation = useNavigation()
    const [sensor,setSensor] = useState(0)
    const [status,setStatus] = useState("")

    useEffect(() => {
    if(sensor.water_level <5){
        setStatus("Habis")
    }else if(sensor.water_level >=5 && sensor.water_level<=10){
        setStatus("Sedang")
    }else if(sensor.water_level >=15){
        setStatus("Cukup")
    }
    const subscriber = firestore()
      .collection('SensorData')
      .doc('plantData')
      .onSnapshot(documentSnapshot => {
        console.log('Sensor data: ', documentSnapshot.data());
        setSensor(documentSnapshot.data());
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [sensor.water_level]);
        return (
            <ScrollView style={styles.container}>

                <View style={styles.InfoContainer}>
                    <Text style={styles.InfoStyle}>INFORMASI LEVEL AIR</Text>
                    
                </View>
                
                <View style = {styles.WaterView}>
                    <Text style = {styles.TxtStyle}>{sensor.water_level}cm</Text>
                </View>

                <View style = {styles.statView}>
                    <Text style = {styles.statTxt}>Ketinggian Air: {status}</Text>
                </View>

                <View style={styles.ButtonCont}>
                    <TouchableOpacity style = {styles.ButtonView} onPress={() => navigation.navigate('Sensors')}>
                        <Text style = {styles.txtButton}>Kembali</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    InfoContainer:{
        paddingVertical:50,
        backgroundColor:'#D1F0E1',
        borderWidth:1,
        borderColor:'#D1F0E1',
        borderRadius:14,
        margin:20,

    },
    InfoStyle:{
        borderWidth:3,
        borderColor:'#000',
        borderRadius:12,
        textAlign:'center',
        color:'#000',
        marginHorizontal:50,
        fontSize:20,
        fontWeight:'bold',
        paddingVertical:15,
        paddingHorizontal:30,
    },

    WaterView:{
        height:200,
        width:200,
        borderWidth:1,
        borderRadius:200,
        justifyContent:'center',
        marginTop:50,
        marginHorizontal:100,

    },
    statView:{
        borderWidth:1,
        justifyContent:'center',
        marginTop:50,
        marginHorizontal:100,
        padding:15,

    },
    statTxt:{
        fontSize:20,
        textAlign:'center',
        color:'#000',
        fontWeight:'400',
    },

    TxtStyle:{
        fontSize:45,
        textAlign:'center',
        color:'#000',
        fontWeight:'400',
    },

    ButtonCont:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:80,
    },

    ButtonView:{
        borderWidth:2,
        borderColor:'#000',
        backgroundColor:'#92D6BD',
        borderRadius:5,
        paddingVertical:15,
        paddingHorizontal:55,
    },

    txtButton:{
        color:'#000',
        fontSize:16,
        textAlign:'center',
    }




})

export default WaterLevel;