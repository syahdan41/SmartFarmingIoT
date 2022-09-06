import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {View,StyleSheet,Text,TouchableOpacity,TextInput,ImageBackground, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = () =>{
    const navigation = useNavigation()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    loginUser = async(email,password) => {
        try{
            await auth().signInWithEmailAndPassword(email,password)
            navigation.navigate('HomeScreen')
        }catch(error){
            Alert.alert("Harap Masukan Email & Password")
            alert(error.message)
        }
        
    }
    return(
        <View style={styles.container}>
                <ImageBackground source={require('../../components/images/imgLogin.jpg')} 
                resizeMode='cover' style={styles.bgImage} >
                <View style={styles.textContainer}>
                    <Text style={styles.welcmText}>SELAMAT DATANG</Text>
                    </View>

                    <View style={styles.boxContainer}>
                        <TextInput style={styles.textBox} 
                        placeholder = 'Email' 
                        placeholderTextColor={'white'} 
                        onChangeText = {(email) => setEmail(email)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        />
                        <TextInput style={styles.textBox}
                        placeholder = 'Password' 
                        placeholderTextColor={'white'} 
                        onChangeText = {(password) => setPassword(password)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        />
                    </View>

                    <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.regBtn} onPress = {()=> loginUser(email,password)}>
                <Text style={styles.regText}>Masuk</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.btmButton}>
                <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
                    <Text style={styles.backBtn}>Batal</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('lupaPw')}>
                    <Text style={styles.lupapwBtn}>Lupa Password</Text>
                </TouchableOpacity>
                </View>
        </ImageBackground>
        
                
    </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    bgImage:{
        flex:1,
        width:'100%',
        height:'100%',
        resizeMode:'cover',
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