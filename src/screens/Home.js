import React, { Component } from 'react';
import {ScrollView,StyleSheet,Text,TouchableOpacity,Image,ImageBackground,View} from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <ScrollView style={styles.container}>
              <View style={styles.profileContainer}>
                <TouchableOpacity>
                    <Image style={styles.profile}
                  imageStyle={{borderRadius:150}}
                  source={require('../../components/images/profile.png')}
                />
                </TouchableOpacity>
                
                <View style={styles.textContainer}>
                    <Text style={styles.userWlcm}>Selamat Datang</Text>
                    <Text style={styles.username}>Nama User</Text>
                </View>             
              </View>

              <View style={styles.judulContainer}>
                  <Text style={styles.judulTxt}>Sistem Monitoring Lahan Pertanian Berbasis Mobile</Text>
              </View>

              <View style={styles.listContainer}>
                  <TouchableOpacity style={styles.listLahan} onPress={() => this.props.navigation.navigate('Infolhn')}>
                      <ImageBackground style={styles.imageLahan} imageStyle={{borderRadius:20}}
                      source={require('../../components/images/imageLahan.jpg')}>
                          <View style={styles.textView}>
                              <Text style={styles.txtImage}>Lahan 1</Text>
                          </View>
                      </ImageBackground>
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
    profileContainer:{
        paddingHorizontal:15,
        paddingVertical:25,
        backgroundColor:'#D1F0E1',
        flexDirection:'row'
    },
    textContainer:{
      marginTop:5,
    },
    profile:{
        height:55,
        width:55,
    },
    userWlcm:{
        color:'#000',
        fontSize:15,
        fontWeight:'500',
        marginLeft:10,
    },
    username:{
        fontSize:18,
        fontWeight:'600',
        color:'#000',
        marginLeft:10,
    },
    judulContainer:{
        marginTop:35,
        backgroundColor:'#D1F0E1',
        marginHorizontal:25,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:30,
    },
    judulTxt:{
        fontSize:15,
        color:'#000',
        fontWeight:'400',
        textAlign:'center',
        lineHeight:25,
    },
    listContainer:{
        marginTop:20,
        marginHorizontal:25,
    },
    listLahan:{
        marginVertical:25,
    },
    imageLahan:{
        height:130,
        width:350,
    },
    textView:{
        position:'absolute',
        left:0,
        bottom:0,
        marginLeft:15,
        marginBottom:15
    },
    txtImage:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    },


})

export default Home;