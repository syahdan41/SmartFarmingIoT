import React, { Component } from 'react';
import {View,StyleSheet,Text,TouchableOpacity,TextInput} from 'react-native';

class Daftarpage1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.txtContainer}>
                    <Text style={styles.grayTxt}>Langkah 1 dari 3</Text>
                    <Text style={styles.titleTxt}>Daftar</Text>
                    <Text style={styles.descTxt}>Daftarkan diri kamu untuk melanjutkan ke tahap verifikasi kode OTP.</Text>
                    
                    <View style={styles.masukLink}>
                    <Text style={styles.masukTxt}>Sudah Memiliki akun?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.linkStyle}>Masuk</Text>
                    </TouchableOpacity>
                    </View>
                
                </View>

                <View style={styles.boxContainer}>
                        <TextInput style={styles.textBox}>Nama/Username</TextInput>
                        <TextInput style={styles.textBox}>Nomor Telepon</TextInput>
                        <TextInput style={styles.textBox}>Password</TextInput>
                        <TextInput style={styles.textBox}>Konfirm Password</TextInput>
                </View>

                <TouchableOpacity style={styles.daftarButton} onPress={() => this.props.navigation.navigate('Daftar2')}>
                    <Text style={styles.buttonTxt}>Daftar</Text>
                </TouchableOpacity>

                <View style={styles.btmButton}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Landing')}>
                    <Text style={styles.backBtn}>Kembali</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Landing')}>
                    <Text style={styles.cnclBtn}>Batal</Text>
                </TouchableOpacity>
                </View>

            </View>
        );
    }
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