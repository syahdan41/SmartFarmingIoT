import React, { Component } from 'react';
import {View,StyleSheet,Text,TouchableOpacity,TextInput,ImageBackground} from 'react-native';

class Login extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../components/images/imgLogin.jpg')} 
                resizeMode='cover' style={styles.bgImage}>
                <View style={styles.textContainer}>
                    <Text style={styles.welcmText}>SELAMAT DATANG</Text>
                    </View>

                    <View style={styles.boxContainer}>
                        <TextInput style={styles.textBox} placeholder = 'USERNAME/TELPON' placeholderTextColor={'white'}/>
                        <TextInput style={styles.textBox}>PASSWORD</TextInput>
                    </View>

                    <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.regBtn} 
            onPress={() => this.props.navigation.navigate('HomeScreen')}>
                <Text style={styles.regText}>Masuk</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.btmButton}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Landing')}>
                    <Text style={styles.backBtn}>Batal</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Landing')}>
                    <Text style={styles.lupapwBtn}>Lupa Password</Text>
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
    textContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:96,
    },
    welcmText:{
        fontSize:25,
        color:'#fff',
    },
    boxContainer:{
        marginHorizontal:10,
        marginTop:15,
    },
    textBox:{
        borderWidth:3,
        borderColor:'#FFF',
        borderRadius:5,
        paddingHorizontal:15,
        paddingVertical:15,
        marginHorizontal:20,
        marginVertical:10,
        color:'#fff',
        fontSize:15,
    },
    btnContainer:{
        justifyContent:'center',
        marginTop:15,
    },
    regBtn:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#D1F0E1',
        paddingVertical:15,
        paddingHorizontal:15,
        borderRadius:2,
        marginHorizontal:60,
    },
    regText:{
        color:'#000',
        fontSize:16,
        textAlign:'center',
    },
    btmButton:{
        flexDirection:'row',
        marginHorizontal:45,
        marginTop:65,
    },
    backBtn:{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold',
        marginLeft:20,
    },
    lupapwBtn:{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold',
        marginLeft:130,
    },
})

export default Login;