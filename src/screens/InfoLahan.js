import React, { Component } from 'react';
import {View,ScrollView,StyleSheet,Text,TouchableOpacity} from 'react-native';

class InfoLahan extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.judulContainer}>
                  <Text style={styles.judulTxt}>Sistem Monitoring Lahan Pertanian Berbasis Mobile</Text>
              </View>

              <View style={styles.infoContainer}>
                <View style={styles.headingContainer}>
                  <Text style={styles.heading}>Lahan 1</Text>
                </View>

                <View style={styles.txtContainer}>
                  <Text style={styles.statusTxt}>Status:</Text>
                  <Text style={styles.statusTxt}>Kelembaban :</Text>
                  <Text style={styles.statusTxt}>Update terakhir :</Text>
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
    judulContainer:{
        marginTop:35,
        backgroundColor:'#D1F0E1',
        marginHorizontal:25,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10,
    },
    judulTxt:{
        fontSize:15,
        color:'#000',
        fontWeight:'400',
        textAlign:'center',
    },
    infoContainer:{
        backgroundColor:'#D1F0E1',
        borderRadius:5,
        marginHorizontal:25,
        marginTop:40,
        paddingHorizontal:30,
        paddingBottom:50,
    },
    headingContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    heading:{
        fontSize:18,
        color:'#000',
        fontWeight:'500',
        marginTop:15,
        
    },
    txtContainer:{
        marginTop:30,
    },
    statusTxt:{
        fontSize:15,
        color:'#000',
        marginHorizontal:15,
        marginVertical:5,
        fontWeight:'500',
    },
    btnContainer:{
        justifyContent:'center',
        marginTop:40,
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
    },
    regText:{
        color:'#000',
        fontSize:16,
        textAlign:'center',
    },

})
export default InfoLahan;