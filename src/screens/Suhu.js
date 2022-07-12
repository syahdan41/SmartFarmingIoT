import React, { Component } from 'react';
import {ScrollView,StyleSheet,Text,TouchableOpacity,View} from 'react-native';

class Suhu extends Component {
    state = {  }
    render() {
        return (

            <ScrollView style={styles.container}>

                <View style={styles.InfoContainer}>
                    <Text style={styles.InfoStyle}>INFORMASI SUHU</Text>
                    
                </View>
                
                <View style = {styles.TempView}>
                    <Text style = {styles.TxtStyle}>30C</Text>
                </View>

                <View style={styles.ButtonCont}>
                    <TouchableOpacity style = {styles.ButtonView} onPress={() => this.props.navigation.navigate('Sensors')}>
                        <Text style = {styles.txtButton}>Kembali</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            
        );
    }
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

    TempView:{
        backgroundColor:'#F3380F',
        height:200,
        width:200,
        borderWidth:1,
        borderRadius:200,
        justifyContent:'center',
        marginTop:50,
        marginHorizontal:100,

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

export default Suhu;