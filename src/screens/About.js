import React, { Component } from 'react';
import {ScrollView,StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';

class About extends Component {
    state = {  }
    render() {
        return (
            <View style = {styles.container}>
                <ImageBackground source={require('../../components/images/ImgAbout.jpg')} 
                resizeMode='cover' style={styles.bgImage}>

                    <View style = {styles.AbtContainer}>
                        <Text style = {styles.AbtTittle1}>TENTANG</Text>
                        <Text style = {styles.AbtTittle2}>APLIKASI</Text>

                        <Text style = {styles.Abt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and s
                        crambled it to make a type specimen book. </Text>

                         <Text style = {styles.Abt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and s
                        crambled it to make a type specimen book. </Text>
                    </View>

                    <View style = {styles.ButtonContainer}>
                        <TouchableOpacity style = {styles.Button} onPress={() => this.props.navigation.navigate('Settings')}>
                            <Text style = {styles.TxtButton}>Kembali</Text>
                        </TouchableOpacity>
                </View>


                </ImageBackground>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    bgImage:{
        flex:1,
        width:'100%',
        height:'100%',
    },

    AbtContainer:{
        justifyContent:'center',
        borderWidth:2,
        borderRadius:10,
        backgroundColor:'#92D6BD',
        marginHorizontal:48,
        marginTop:128,
    },

    AbtTittle1:{
        textAlign:'center',
        fontSize:15,
        color:'#000',
        fontWeight:'bold',
        marginTop:20,
    },

    AbtTittle2:{
        textAlign:'center',
        fontSize:15,
        color:'#000',
        fontWeight:'bold',
    },
    
    Abt:{
        textAlign:'justify',
        marginHorizontal:20,
        padding:10,
        color:'#000',
        fontWeight:'400',


    },

     ButtonContainer:{
        justifyContent:'center',
        marginBottom:27,
    },

    Button:{
        alignItems:'center',
        backgroundColor:'#26F8AD',
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:10,
        marginHorizontal:100,
        marginVertical:40,
        borderWidth:2,
        borderColor:'#000',
    },

    TxtButton:{
        color:'#000',
        fontSize:16,
        textAlign:'center',
    },


})

export default About;