import React, { Component,useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {View,StyleSheet,Text,TouchableOpacity,TextInput, Alert, Pressable, ScrollView} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Daftarpage1 = () =>{
    
   const navigation = useNavigation()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [passwordConf,setPasswordConf] = useState('')
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [phonenumb,setPhonenumb] = useState('')
    

    registerUser = async (email,password,firstname,lastname,phonenumb) => {
        if(email === '' && password ===''){
            navigation.navigate('Daftar1')
            Alert.alert('Harap Masukan Email dan Password!')
        }
         if(firstname === '' && lastname ===''){
            navigation.navigate('Daftar1')
            Alert.alert('Harap Masukan Data Nama!')
        }
        if(phonenumb != '10'){
            navigation.navigate('Daftar1')
            Alert.alert('No Telpon Harus 10 Digit!')
        }
        if( password != passwordConf){
            navigation.navigate('Daftar1')
            Alert.alert('Konfirmasi Password Salah!')
        }
        else{
        await auth().createUserWithEmailAndPassword(email,password)
        .then(() => {
            auth().currentUser.sendEmailVerification({
                handleCodeInApp:false,
                url: 'https://projecttav2-dd435.firebaseapp.com',
            })
            .then(()=>{
                alert('Link Verifikasi Telah Dikirim Pastikan Email Yang Anda Daftarkan Benar')
                navigation.navigate('Login')
            }).catch((error)=>{
                Alert.alert(error.message)
            })
            .then(() => {
                firestore().collection('users')
                .doc(auth().currentUser.uid)
                .set({
                    firstname,
                    lastname,
                    email,
                    phonenumb,
                })
               
            })
            .catch((error)=>{
                Alert.alert(error.message)
            })
        })
        .catch((error)=>{
                Alert.alert(error.message)
            })

        }
        
    }
    return(
        <ScrollView style={styles.container}>
                <View style={styles.txtContainer}>
                    <Text style={styles.titleTxt}>Daftar</Text>
                    <Text style={styles.descTxt}>Daftarkan diri kamu untuk melanjutkan ke tahap login.</Text>
                    
                    <View style={styles.masukLink}>
                    <Text style={styles.masukTxt}>Sudah Memiliki akun?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.linkStyle}>Masuk</Text>
                    </TouchableOpacity>
                    </View>
                
                </View>

                <View style={styles.boxContainer}>
                    <TextInput style={styles.textBox} 
                    placeholder="Nama Depan"
                    autoCapitalize={true}
                    autoCorrect={false}
                    onChangeText = {(firstname) => setFirstname(firstname) } />
                        
                    <TextInput style={styles.textBox} 
                    placeholder="Nama Akhir"
                    autoCapitalize={true}
                    autoCorrect={false}
                    onChangeText = {(lastname) => setLastname(lastname) }/>

                    <TextInput style={styles.textBox} 
                    placeholder="Nomor Telpon"
                    keyboardType='number-pad'
                    onChangeText = {(phonenumb) => setPhonenumb(phonenumb) }/>

                    <TextInput style={styles.textBox}
                    placeholder="Email"
                    autoCorrect={false}
                    onChangeText = {(email) => setEmail(email) }/>
                        
                    <TextInput style={styles.textBox} placeholder="Password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                    onChangeText = {(password) => setPassword(password) }/>

                    <TextInput style={styles.textBox} placeholder="Konfirm Password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                    onChangeText = {(passwordConf) => setPasswordConf(passwordConf) }/>
                </View>

                <TouchableOpacity style={styles.daftarButton} onPress={() => registerUser(email,password,firstname,lastname,phonenumb)}>
                    <Text style={styles.buttonTxt}>Daftar</Text>
                </TouchableOpacity>

                <View style={styles.btmButton}>
                <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
                    <Text style={styles.backBtn}>Kembali</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
                    <Text style={styles.cnclBtn}>Batal</Text>
                </TouchableOpacity>
                </View>

            </ScrollView>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#D1F0E1',

    },
    txtContainer:{
        marginHorizontal:32,
        marginTop:20,
    },
    grayTxt:{
        fontSize:15,
        fontWeight:'normal',
    },
    titleTxt:{
        color:'#000',
        fontWeight:'bold',
        fontSize:25,
        marginTop:15,
    },
    descTxt:{
        color:'#000',
        fontSize:15,
        fontWeight:'500',
        marginTop:10,
    },
    masukLink:{
        flexDirection:'row',
        marginTop:10,
    },
    masukTxt:{
        color:'#000',
        fontSize:12,
        fontWeight:'500',
    },
    linkStyle:{
        color:'#0AB4F0',
        textDecorationLine:'underline',
        fontSize:12,
        fontWeight:'normal',
    },
    boxContainer:{
        marginHorizontal:10,
        marginTop:15,
    },
    textBox:{
        borderWidth:2,
        borderColor:'#000',
        borderRadius:5,
        paddingHorizontal:15,
        paddingVertical:15,
        marginHorizontal:20,
        marginVertical:10,
    },
    daftarButton:{
        borderRadius:2,
        backgroundColor:'#26F8AD',
        borderWidth:1,
        borderColor:'#000',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:80,
        paddingHorizontal:5,
        paddingVertical:15,
        marginTop:10,

    },
    buttonTxt:{
        color:'#000',
        fontWeight:'bold',
    },
    btmButton:{
        flexDirection:'row',
        marginHorizontal:45,
        marginTop:30,
        marginBottom:100,
    },
    backBtn:{
        color:'#000',
        fontSize:17,
        fontWeight:'bold'
    },
    cnclBtn:{
        color:'#000',
        fontSize:17,
        fontWeight:'bold',
        marginLeft:200,
    },

})

export default Daftarpage1;