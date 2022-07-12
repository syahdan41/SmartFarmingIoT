import React, { Component } from 'react';
import {View,StyleSheet,Text,TouchableOpacity,TextInput} from 'react-native';

class Daftarpage2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.txtContainer}>
                    <Text style={styles.grayTxt}>Langkah 2 dari 3</Text>
                    <Text style={styles.titleTxt}>Verifikasi</Text>
                    <Text style={styles.descTxt}>Masukan 4-digit kode OTP yang telah terkirim melalui nomor telepon kamu.</Text>
                    
                        <View style={styles.masukLink}>
                            <Text style={styles.masukTxt}>Bukan kamu?</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Daftar1')}>
                                <Text style={styles.linkStyle}>Ganti nomor</Text>
                            </TouchableOpacity>
                        </View>    
                </View>

                <View style={styles.verifContainer}>
                    <TextInput style={styles.inputVerif}/>
                    <TextInput style={styles.inputVerif}/>
                    <TextInput style={styles.inputVerif}/>
                    <TextInput style={styles.inputVerif}/>
                </View>
                
                <TouchableOpacity style={styles.lnjtButton} 
                onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.buttonTxt}>Lanjut</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.resendButton} 
                onPress={() => this.props.navigation.navigate('Daftar2')}>
                    <Text style={styles.buttonTxt}>Kirim Ulang</Text>
                </TouchableOpacity>

                <View style={styles.btmButton}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Daftar1')}>
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
        fontWeight:'500'
    },
    linkStyle:{
        color:'#0AB4F0',
        textDecorationLine:'underline',
        fontSize:12,
        fontWeight:'normal',
    },
    verifContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:60,
    },
    inputVerif:{
        borderBottomWidth:3,
        borderColor:'#000',
        marginHorizontal:20,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        fontSize:20,
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

export default Daftarpage2;