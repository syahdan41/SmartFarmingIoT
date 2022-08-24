import React, { Component, useState,useEffect } from 'react';
import {ScrollView,StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import {firebase} from '@react-native-firebase/database';

const Kelembaban = () => {
    
    const [kelembaban,setLembab] = useState(0)
    
   useEffect(() =>{
        if(kelembaban == 0){
        // rubah komponent
    }
         firebase.app().database('https://projecttav2-dd435-default-rtdb.asia-southeast1.firebasedatabase.app/')
        .ref('/Sensor_Data/Plant1/')
        .once('value')
        .then((snapshot) => {
            if(snapshot.exists){
                setLembab(snapshot.val())
            }
            else{
                console.log('User Does Not Exist')
            }
        })
    },[])

    return (
    <ScrollView style={styles.container}>
                <View style={styles.InfoContainer}>
                    <Text style={styles.InfoStyle}>INFORMASI KELEMBABAN TANAH</Text>
                    
                </View>
                
                <View style = {styles.HumidView}>
                    <Text style = {styles.TxtStyle}>{kelembaban.Soil_value1}%</Text>
                    <Text style = {styles.TxtStyle}>40%</Text>
                    <Text style = {styles.TxtStyle}>30%</Text>
                </View>
                <View style = {styles.descView}>
                    <Text style = {styles.descTxt1}>Tanaman 1</Text>
                    <Text style = {styles.descTxt2}>Tanaman 2</Text>
                    <Text style = {styles.descTxt3}>Tanaman 3</Text>
                </View>
                

                <View style={styles.ButtonCont}>
                    <TouchableOpacity style = {styles.ButtonView} onPress={() => this.props.navigation.navigate('Sensors')}>
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

    HumidView:{
        marginHorizontal:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:100
    },

    descView:{
        flexDirection:'row',
        marginHorizontal:40
    },
    descTxt1:{
        marginHorizontal:15

    },
    descTxt2:{
        marginHorizontal:35

    },
    descTxt3:{
        marginHorizontal:15

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