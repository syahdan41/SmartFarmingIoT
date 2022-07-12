import React, { Component } from 'react';
import {View, Text, TouchableOpacity,StyleSheet,Image, ImageBackground} from 'react-native';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.container}>
            <ImageBackground source={require('../../components/images/imgLanding.jpg')} 
            resizeMode="cover" style={styles.bgImage}>
            <View style={styles.txtView}>
            <Text style={styles.boldText}>Monitoring Kelembaban</Text>
            <Text style={styles.boldText}>Lahan Pertanian Dalam Satu Aplikasi</Text>
            <Text style={styles.normText}>Monitor kelembaban lahan pertanian anda dengan cepat dan mudah dalam satu aplikasi</Text>
            </View>
            
            <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.regBtn} onPress={() => this.props.navigation.navigate('Daftar1')}>
                <Text style={styles.regText}>Daftar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logBtn} onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={styles.logText}>Masuk</Text>
            </TouchableOpacity>
            </View>
            </ImageBackground>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    bgImage:{
        flex:1,
        justifyContent:'center',
        width:'100%',
        height:'100%',
    },
    txtView:{
        marginTop:50,
    },
    boldText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        lineHeight:25,
        textAlign:'center',
        marginHorizontal:10,
    },
    normText:{
        color:'white',
        fontSize:15,
        fontWeight:'normal',
        lineHeight:25,
        textAlign:'center',
        marginHorizontal:20,
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
        borderRadius:15,
        marginHorizontal:60,
    },
    logBtn:{
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#fff',
        paddingVertical:15,
        paddingHorizontal:15,
        borderRadius:15,
        marginHorizontal:60,
        borderWidth:2,
        marginTop:10,
    },
    regText:{
        color:'#000',
        fontSize:16,
        textAlign:'center',
    },
    logText:{
        color:'#fff',
        fontSize:16,
        textAlign:'center',

    },
});
export default Landing;