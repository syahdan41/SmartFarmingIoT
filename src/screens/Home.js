import React, { Component, useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {ScrollView,StyleSheet,Text,TouchableOpacity,Image,ImageBackground,View} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Home = () => {
    const navigation = useNavigation()
    const [name,setName] = useState('')
    const [image,setImage] = useState('')

    useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .onSnapshot(documentSnapshot => {
        console.log('User Data: ', documentSnapshot.data());
        setName(documentSnapshot.data());
        setImage(documentSnapshot.data());
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);
    return(
        <ScrollView style={styles.container}>
              <View style={styles.profileContainer}>
                <TouchableOpacity>
                    <Image style={styles.profile}
                  imageStyle={{borderRadius:150}}
                  source={{uri:image ? image.userImg: 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'||'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'}}
                />
                </TouchableOpacity>
                
                <View style={styles.textContainer}>
                    <Text style={styles.userWlcm}>Selamat Datang</Text>
                    <Text style={styles.username}>{name.firstname} {name.lastname}</Text>
                </View>             
              </View>

              <View style={styles.judulContainer}>
                  <Text style={styles.judulTxt}>Sistem Monitoring Lahan Pertanian Berbasis Mobile</Text>
              </View>

              <View style={styles.listContainer}>
                  <TouchableOpacity style={styles.listLahan} onPress={() => navigation.navigate('Infolhn')}>
                      <ImageBackground style={styles.imageLahan} imageStyle={{borderRadius:20}}
                      source={require('../../components/images/imageLahan.jpg')}>
                          <View style={styles.textView}>
                              <Text style={styles.txtImage}>Cabai 1</Text>
                          </View>
                      </ImageBackground>
                  </TouchableOpacity>
              </View>

              <View style={styles.listContainer}>
                  <TouchableOpacity style={styles.listLahan} onPress={() => navigation.navigate('Infolhn2')}>
                      <ImageBackground style={styles.imageLahan} imageStyle={{borderRadius:20}}
                      source={require('../../components/images/imageLahan.jpg')}>
                          <View style={styles.textView}>
                              <Text style={styles.txtImage}>Cabai 2</Text>
                          </View>
                      </ImageBackground>
                  </TouchableOpacity>
              </View>

              <View style={styles.listContainer3}>
                  <TouchableOpacity style={styles.listLahan} onPress={() => navigation.navigate('Infolhn3')}>
                      <ImageBackground style={styles.imageLahan} imageStyle={{borderRadius:20}}
                      source={require('../../components/images/imageLahan.jpg')}>
                          <View style={styles.textView}>
                              <Text style={styles.txtImage}>Cabai 3</Text>
                          </View>
                      </ImageBackground>
                  </TouchableOpacity>
              </View>
              
            </ScrollView>

    )
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
        borderRadius:150
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
        marginHorizontal:25
    },
    listContainer3:{
        marginHorizontal:25,
        marginBottom:120
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