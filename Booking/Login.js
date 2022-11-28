import { View, Text, ImageBackground, TouchableOpacity, Image, Animated,ToastAndroid } from 'react-native'
import React, { useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { useEffect } from 'react'
import { TextInput } from 'react-native-paper'
import axios from 'axios'


const Login = ({navigation}) => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const validatelog=()=>{
        if((username=="")||(password=="")){
          
          ToastAndroid.show("Enter all fields",ToastAndroid.SHORT);
        }
        else{
            // alert(username)
          getuser();
        }
      }
        const getuser=()=>{
             axios({
              method: 'GET',
              url: 'http://192.168.0.109:8081/login/'+username,
            })
            .then(function (response){
              console.log("response ", JSON.stringify(response.data))
              if(username==response.data.username&&password==response.data.password){
                ToastAndroid.show("Logged in",ToastAndroid.SHORT);
                navigation.navigate("Tabs",{username});
              }
              else{
                alert("Incorrect Credentials")
              }
              // alert(JSON.stringify(response.data));
            })
            .catch(function(error){
              console.log("error",error)
              alert(error);
            })
          }

    const show=()=>{
        ToastAndroid.show("Logged in",ToastAndroid.SHORT);
        navigation.navigate("Tabs");
    }
  return (
    <View style={{flex:1,justifyContent:'center'}}>
       <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
            <ImageBackground style={{ flex: 1 }} source={require('./assets/onboard.jpg')}>
            <Image style={styles.img} source={require('./assets/Trickshot.png')}></Image>
                <View style={styles.card}>
                <Text style={styles.heading}>Login</Text>
                <TextInput mode='flat' activeUnderlineColor='transparent' left={<TextInput.Icon style={{top:4}} icon="account"/>} underlineColor='transparent' onChangeText={(username)=>setusername(username)} style={[styles.input,styles.shadow]} placeholder='Username'></TextInput>
                <TextInput secureTextEntry={true} activeUnderlineColor='transparent' left={<TextInput.Icon style={{top:4}} icon="lock"/>} underlineColor='transparent' onChangeText={(password)=>setpassword(password)} style={[styles.input,styles.shadow]} placeholder='Password'></TextInput>
                <TouchableOpacity onPress={validatelog} style={styles.btn}>
                    <Text style={styles.btntext}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("ForgotPass")} style={{alignSelf:'center',top:50}}>
                    <Text style={styles.hyperlink}>Forgot Password</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("Signup")} style={{alignSelf:'center',top:60}}>
                    <Text style={styles.hyperlink}>Sign Up</Text>
                </TouchableOpacity>
                </View>
            </ImageBackground>
    </View>
  )
}

const styles=StyleSheet.create({
    img: {
        top: 80,
        height: 200,
        width: 350,
        resizeMode: 'cover',
        alignSelf: 'center'
    },
    heading: {
        color: 'white',
        top: 20,
        left:20,
    //    alignSelf:'left',
        fontSize: 25,
        fontWeight: 'bold'
    },
    card:{
       
        flex:0.8,
        // opacity:0.2,
        top:120,
        alignSelf:'center',
        height:390,
        width:395,
        backgroundColor:'rgba(255,255,255,0.2)',
        // borderRadius:40,
        borderTopStartRadius:40,
        borderTopEndRadius:40
        // overflow:true
    },
    btn: {
        // opacity:0.8,
        justifyContent: 'center',
        // left:20,
        alignSelf: 'center',
        top: 50,
        borderColor: 'white',
        height: 50,
        width: 300,
        marginBottom: 20,
        backgroundColor: '#5adbb5',
        borderRadius: 17,
        // marginBottom:20
    },
    btntext: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight:'bold',
        color:'white'
    },
    input:{
        margin:20,
        top:30,
        alignSelf:'center',
        height:50,
        width:300,
        borderRadius:20,
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        backgroundColor:'white',
        borderColor:'#5adbb5',
        borderWidth:2,
        padding:5,
    },
    hyperlink:{
        alignSelf:'center',
        color:'white',
        fontSize:15,

    },
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
});
export default Login