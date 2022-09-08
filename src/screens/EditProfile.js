import React, { Component, useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {ScrollView,StyleSheet,Text,TouchableOpacity,Image,View,TextInput,ImageBackground, Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import auth from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore";
import storage from '@react-native-firebase/storage';

const EditProfile = () => {
    const navigation = useNavigation()
    const [image, setImage] = useState(null)
    const [uploading,setUploading] = useState(false)
    const [transferred,setTransferred] = useState(0)
    const [userData,setUserData] = useState(null)
    const [email,setEmail] = useState('')

    const updateUser = async() =>{
        let imgUrl = await uploadImage();
        if(imgUrl == null && userData.userImg){
            imgUrl = userData.userImg;
        }
        firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .update({
            firstname:userData.firstname,
            lastname:userData.lastname,
            phonenumb:userData.phonenumb,
            userImg:imgUrl,
            email:userData.email,
        }).then(()=>{
            Alert.alert('Profile Telah Diperbarui');
        })     
        
    }

    
  const uploadImage = async () => {
    if( image == null ) {
      return null;
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    // Add timestamp to File Name
    const extension = filename.split('.').pop(); 
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

    setUploading(true);
    setTransferred(0);

    const storageRef = storage().ref(filename);
    const task = storageRef.putFile(uploadUri);

    // Set transferred state
    task.on('state_changed', (taskSnapshot) => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );

      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });

    try {
      await task;

      const url = await storageRef.getDownloadURL();

      setUploading(false);
      setImage(null);

      // Alert.alert(
      //   'Image uploaded!',
      //   'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
      // );
      return url;

    } catch (e) {
      console.log(e);
      return null;
    }

  };

    useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .onSnapshot(documentSnapshot => {
        console.log('User Data: ', documentSnapshot.data());
        setUserData(documentSnapshot.data());
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      console.log(image);
      const imageUri = Platform.OS === 'Android' ? image.sourceURL : image.path;
      setImage(imageUri);
    });
  };

        return (
            <ScrollView style={styles.container}>
                <View style={styles.ImgContainer}>
                    <Image style={styles.EditImage} source={{
                  uri: image
                    ? image
                    : userData
                    ? userData.userImg ||
                      'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'
                    : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
                }}/>
                    <TouchableOpacity style = {styles.EditButton} onPress={choosePhotoFromLibrary}>
                        <ImageBackground style = {styles.EditButtonWidth} 
                        source = {require('../../components/images/pencil.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.BoxContainer}>
                    <TextInput style = {styles.BoxStyle}
                    placeholder="Nama Depan"
                    autoCorrect={false}
                    value={userData ? userData.firstname : ''}
                    onChangeText={(txt) => setUserData({...userData, firstname: txt})}
                    />
                    <TextInput style = {styles.BoxStyle}
                    placeholder="Nama Belakang"
                    autoCorrect={false}
                    value={userData ? userData.lastname : ''}
                    onChangeText={(txt) => setUserData({...userData, lastname: txt})}
                    />
                    <TextInput style = {styles.BoxStyle}
                    placeholder="email"
                    autoCorrect={false}
                    value={userData ? userData.email : ''}
                    onChangeText={(txt) => setUserData({...userData, email: txt})}
                    />
                    <TextInput style = {styles.BoxStyle}
                    placeholder="Nomor Telpon"
                    autoCorrect={false}
                    value={userData ? userData.phonenumb : ''}
                    onChangeText={(txt) => setUserData({...userData, phonenumb: txt})}
                    />
                </View>

                <View style = {styles.ButtonContainer}>
                    <TouchableOpacity style = {styles.PerbaruiButton} onPress={updateUser}>
                        <Text style = {styles.TxtButton}>Perbarui</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.BackLayout}>
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')}> 
                        <Text style = {styles.BackButton}>Kembali</Text>
                    </TouchableOpacity>

                    <TouchableOpacity> 
                        <Text style = {styles.BackButton}>Batal</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            
        );
    }


const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    ImgContainer:{
        alignItems:'center',
        marginTop:50,
        
    },

    EditImage:{
        height:115,
        width:115,
        borderRadius:200,
        
    },

    EditButtonWidth:{
        height:18,
        width:18,
    },

    EditButton:{
        borderWidth:5,
        borderColor:'#92D6BD',
        backgroundColor:'#92D6BD',
        borderRadius:200,
        position:'absolute',
        bottom:10,
        right:150,
    },

    BoxContainer:{
        marginVertical:45,
        marginHorizontal:35,

    },

    BoxStyle:{
        color:'#000',
        fontSize:15,
        borderBottomWidth:2,
        borderRadius:5,
        borderColor:'#000',
        marginVertical:10,
        marginHorizontal:20,
        paddingHorizontal:10,
        paddingVertical:11,

    },

    ButtonContainer:{
        justifyContent:'center',
        marginBottom:27,
    },

    PerbaruiButton:{
        alignItems:'center',
        backgroundColor:'#26F8AD',
        paddingVertical:15,
        paddingHorizontal:15,
        borderRadius:2,
        marginHorizontal:60,
        marginVertical:10,
        borderWidth:2,
        borderColor:'#000',
    },

    BackButton:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:18,
        color:'#000',
        marginHorizontal:60,
        marginTop:20,
    },

    TxtButton:{
        color:'#000',
        fontSize:16,
        textAlign:'center',
    },

    BackLayout:{
        flexDirection:'row',
        marginHorizontal:20,
        marginBottom:120,
    }

})

export default EditProfile;