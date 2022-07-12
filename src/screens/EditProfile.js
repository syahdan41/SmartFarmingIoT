import React, { Component } from 'react';
import {ScrollView,StyleSheet,Text,TouchableOpacity,Image,View,TextInput,ImageBackground} from 'react-native';

class EditProfile extends Component {
    state = {  }
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.ImgContainer}>
                    <Image style={styles.EditImage} source={require('../../components/images/profile.png')}/>
                    <TouchableOpacity style = {styles.EditButton}>
                        <ImageBackground style = {styles.EditButtonWidth} 
                        source = {require('../../components/images/pencil.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.BoxContainer}>
                    <TextInput style = {styles.BoxStyle}>Nama/username</TextInput>
                    <TextInput style = {styles.BoxStyle}>Nomor Telepon</TextInput>
                    <TextInput style = {styles.BoxStyle}>Tempat, Tanggal Lahir</TextInput>
                    <TextInput style = {styles.BoxStyle}>Profesi</TextInput>
                </View>

                <View style = {styles.ButtonContainer}>
                    <TouchableOpacity style = {styles.PerbaruiButton}>
                        <Text style = {styles.TxtButton}>Perbarui</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.BackLayout}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}> 
                        <Text style = {styles.BackButton}>Kembali</Text>
                    </TouchableOpacity>

                    <TouchableOpacity> 
                        <Text style = {styles.BackButton}>Batal</Text>
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

    ImgContainer:{
        alignItems:'center',
        marginTop:50,
    },

    EditImage:{
        height:115,
        width:115,
        
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