import React, { Component } from 'react';
import {ScrollView,StyleSheet,Text,TouchableOpacity,Image,ImageBackground,View} from 'react-native';

class InfoSensor extends Component {
    state = {  }
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.InfoContainer}>
                <Text style={styles.InfoStyle}>INFORMASI</Text>
            </View>

            <View style={styles.ButtonContainer}>
                <View>
                <TouchableOpacity style={styles.ButtonStyle} onPress={() => this.props.navigation.navigate('Water')}>
                    <Image source={require('../../components/images/humidity.png')} 
                    style={styles.ImgStyle}/>
                </TouchableOpacity>
                <Text style={styles.TxtStyle1}>Water Level</Text>
                </View>

                <View>
                <TouchableOpacity style={styles.ButtonStyle} onPress={() => this.props.navigation.navigate('Humid')}>
                    <Image source={require('../../components/images/raindrops.png')} 
                    style={styles.ImgStyle}/>
                </TouchableOpacity>
                    <Text style={styles.TxtStyle1}>Kelembaban</Text>
                </View>
                
                <View>
                    <TouchableOpacity style={styles.ButtonStyle} onPress={() => this.props.navigation.navigate('Temp')}>
                        <Image source={require('../../components/images/temperature-high.png')} 
                        style={styles.ImgStyle}/>
                    </TouchableOpacity>
                        <Text style={styles.TxtStyle1}>Suhu</Text>
                </View>
                

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
    ButtonContainer:{
        flexDirection:'row',
        justifyContent: 'center',
        marginTop:110,
    },
    ButtonStyle:{
        borderWidth:3,
        borderRadius:10,
        padding:10,
        backgroundColor:'#D1F0E1',
        marginHorizontal:13,
        flexDirection:'column'
    },
    ImgStyle:{
        width:55,
        height:55,
    },
    TxtStyle1:{
        color:'#000',
        textAlign:'center',
        marginTop:5,
        fontWeight:'bold',
    },
    TxtStyle2:{
        color:'#000',
        textAlign:'center',
        fontWeight:'bold'
    },

    regBtn:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#92D6BD',
        paddingVertical:15,
        paddingHorizontal:15,
        borderRadius:2,
        marginHorizontal:60,
        borderWidth:2,
        borderColor:'#000',
        marginTop:35,
    },

    regText:{
        color:'#000',
        fontSize:16,
        textAlign:'center',
    },
})

export default InfoSensor;