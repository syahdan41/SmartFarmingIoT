import React, { Component, useState,useEffect } from 'react';
import {Alert, ScrollView,StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const Kelembaban = () => {
    const navigation = useNavigation()
    const [sensor,setSensor] = useState(0)

useEffect(() => {
    const subscriber = firestore()
      .collection('SensorData')
      .doc('plantData')
      .onSnapshot(documentSnapshot => {
        console.log('Sensor data: ', documentSnapshot.data());
        setSensor(documentSnapshot.data());
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

    return (
    <ScrollView style={styles.container}>
                <View style={styles.InfoContainer}>
                    <Text style={styles.InfoStyle}>INFORMASI KELEMBABAN TANAH</Text>
                    
                </View>
                
                <View style = {styles.HumidView1}>
                    <Text style = {styles.TxtStyle}>{sensor.Soil_value1}%</Text>
                    <Text style = {styles.TxtStyle}>{sensor.Soil_value2}%</Text>
                    <Text style = {styles.TxtStyle}>{sensor.Soil_value3}%</Text>
                </View>
                <View style = {styles.descView}>
                    <Text style = {styles.descTxt1}>Tanaman 1</Text>
                    <Text style = {styles.descTxt2}>Tanaman 2</Text>
                    <Text style = {styles.descTxt3}>Tanaman 3</Text>
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

    HumidView1:{
        marginHorizontal:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:100,

    },

    descView:{
        flexDirection:'row',
        marginHorizontal:40
    },
    descTxt1:{
        marginHorizontal:15,
        color:'#000'

    },
    descTxt2:{
        marginHorizontal:35,
        color:'#000'

    },
    descTxt3:{
        marginHorizontal:15,
        color:'#000'

    },

    TxtStyle:{
        fontSize:20,
        textAlign:'center',
        color:'#000',
        fontWeight:'400',
        height:100,
        width:100,
        borderWidth:1,
        borderRadius:200,
        marginHorizontal:10,
        paddingVertical:35,
    
        
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

export default Kelembaban;