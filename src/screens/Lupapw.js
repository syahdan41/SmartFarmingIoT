import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {View,StyleSheet,Text,TouchableOpacity,TextInput, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';


const Lupapw = () => {
   const navigation = useNavigation()
   const [email,setEmail] = useState('')

    const loginUser = async(email) => {
        const emailVal=email;
        try{
            await auth().sendPasswordResetEmail(emailVal)
            Alert.alert('Link Untuk Reset Telah Dikirim Harap Cek Email Anda.')
        }catch(error){
            Alert.alert('Gagal Mengirim.')
            alert(error.message)
        }
        
    }
    
        return (
            <View style={styles.container}>
                <View style={styles.txtContainer}>
                    <Text style={styles.titleTxt}>Lupa Password?</Text>
                    <Text style={styles.descTxt}>Silahkan masukan Email yang terdaftar di bawah.</Text>
                    
                        <View style={styles.masukLink}>
                            <Text style={styles.masukTxt}>Belum memiliki akun?klik</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Daftar1')}>
                                <Text style={styles.linkStyle}>daftar</Text>
                            </TouchableOpacity>
                        </View>    
                </View>

                <View style={styles.verifContainer}>
                    <TextInput style={styles.inputVerif} 
                        placeholder = 'Email' 
                        placeholderTextColor={'black'} 
                        onChangeText = {(email) => setEmail(email)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        />
                </View>
                
                
                <TouchableOpacity style={styles.lnjtButton} 
                onPress={()=> loginUser(email)}>
                    <Text style={styles.buttonTxt}>Kirim</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.resendButton} 
                onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonTxt}>Kembali</Text>
                </TouchableOpacity>
            </View>
            
        );
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
        fontWeight:'500'
    },
    linkStyle:{
        color:'#0AB4F0',
        textDecorationLine:'underline',
        fontSize:12,
        fontWeight:'normal',
    },
    verifContainer:{
        justifyContent:'center',
        marginTop:60,
    },
    inputVerif:{
        borderWidth:3,
        borderColor:'#000',
        marginHorizontal:50,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        fontSize:20,
        textAlign:'center',
        marginVertical:15,
        color:'#000'
    },
    lnjtButton:{
        borderRadius:2,
        backgroundColor:'#26F8AD',
        borderWidth:2,
        borderColor:'#000',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:80,
        paddingHorizontal:5,
        paddingVertical:15,
        marginTop:70,

    },
    resendButton:{
        borderRadius:2,
        
        borderWidth:2,
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
        marginTop:65,
    },
    backBtn:{
        color:'#000',
        fontSize:17,
        fontWeight:'bold',
        marginLeft:20,
    },
    cnclBtn:{
        color:'#000',
        fontSize:17,
        fontWeight:'bold',
        marginLeft:160,
    },
})

export default Lupapw;