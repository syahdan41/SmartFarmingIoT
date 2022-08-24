import React, { Component } from 'react';
import {ScrollView,StyleSheet,Text,TouchableOpacity,Image,ImageBackground,View} from 'react-native';
import auth from '@react-native-firebase/auth';

class Settings extends Component {
    state = {  }
    signOut = () => {
      auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  
    render() {
        return (
            <ScrollView style={styles.container}>
                
            <View style={styles.InfoContainer}>
                <Text style={styles.InfoStyle}>PENGATURAN</Text>
            </View>

                <View style={styles.SettContain}>
                    <TouchableOpacity style = {styles.SettButton} 
                    onPress={() => this.props.navigation.navigate('Edit')}>
                        <Image source={require('../../components/images/User.png')} 
                        style={styles.ImgStyle}/>
                        <Text style = {styles.TxtButn}>Edit Profil</Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity style = {styles.SettButton}>
                        <Image source={require('../../components/images/volume-mute.png')} 
                        style={styles.ImgStyle}/>
                        <Text style = {styles.TxtButn}>Matikan Notifikasi</Text>
                    </TouchableOpacity> */}
                
                    <TouchableOpacity style = {styles.SettButton} 
                    onPress={() => this.props.navigation.navigate('About')}>
                        <Image source={require('../../components/images/info.png')} 
                        style={styles.ImgStyle} />
                        <Text style = {styles.TxtButn}>Tentang Applikasi</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.SettButton} onPress={() => this.signOut()}  >
                        <Image source={require('../../components/images/sign-out.png')} 
                        style={styles.ImgStyle}/>
                        <Text style = {styles.TxtButn}>Keluar</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.regBtn} 
            onPress={() => this.props.navigation.navigate('Home')}>
                <Text style={styles.regText}>Kembali</Text>
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
    },

    SettContain:{
        marginTop:20,
        margin:19,
       
    },
    ImgStyle:{
        width:38,
        height:38,
        marginTop:2,
    },

    SettButton:{
        flexDirection:'row',
        marginVertical:10,
        borderWidth:3,
        borderRadius:15,
        backgroundColor:'#D1F0E1',
        padding:8,
    },
    TxtButn:{
        color:'#000',
        fontSize:18,
        fontWeight:'bold',
        paddingTop:8,
        marginHorizontal:15,
        marginBottom:15,
    },

    regBtn:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#92D6BD',
        paddingVertical:15,
        paddingHorizontal:15,
        borderRadius:2,
        marginHorizontal:65,
        borderWidth:2,
        borderColor:'#000',
        marginTop:20,
        marginBottom:140,
    },

    regText:{
        color:'#000',
        fontSize:16,
        textAlign:'center',
    },
})

export default Settings;