import { View, Text, ImageBackground, TouchableOpacity, Image, Animated,ToastAndroid } from 'react-native'
import React, { useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { useEffect } from 'react'
import { TextInput } from 'react-native-paper'
import axios from 'axios'


const ForgotPass = ({navigation}) => {
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const validatelog=()=>{
        if((username=="")||(password=="")||(email=="")){
          
          ToastAndroid.show("Enter all fields",ToastAndroid.SHORT);
        }
        else{
            // alert(username)
          resetpass();
        }
      }
    const resetpass=async()=>{
        await axios({
          method: 'PUT',
          url: 'http://192.168.0.109:8081/forgotpass/'+username+'/'+email+'/'+password,
          data: {
            username:username,
            email: email,
            password: password,
          }
        })
        .then(function (response){
          console.log("response ", JSON.stringify(response.data))
        //   alert(JSON.stringify(response.data));
          ToastAndroid.show(JSON.stringify(response.data),ToastAndroid.SHORT);
          navigation.navigate("Login");
        })
        .catch(function(error){
          console.log("error",error)
          alert(error);
        })
      }
  return (
    <View style={{flex:1,justifyContent:'center'}}>
    <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
         <ImageBackground style={{ flex: 1 }} source={require('./assets/onboard.jpg')}>
         <Image style={styles.img} source={require('./assets/Trickshot.png')}></Image>
             <View style={styles.card}>
             <Text style={styles.heading}>Reset Password</Text>
             <TextInput mode='flat' activeUnderlineColor='transparent' left={<TextInput.Icon style={{top:4}} icon="account"/>} underlineColor='transparent' onChangeText={(username)=>setusername(username)} style={[styles.input,styles.shadow]} placeholder='Username'></TextInput>
             <TextInput activeUnderlineColor='transparent' left={<TextInput.Icon style={{top:4}} icon="email"/>} underlineColor='transparent' onChangeText={(email)=>setemail(email)} style={styles.input} placeholder='Email'></TextInput>
             <TextInput secureTextEntry={true} activeUnderlineColor='transparent' left={<TextInput.Icon style={{top:4}} icon="lock"/>} underlineColor='transparent' onChangeText={(password)=>setpassword(password)} style={[styles.input,styles.shadow]} placeholder='Enter New Password'></TextInput>
             <TouchableOpacity onPress={validatelog} style={styles.btn}>
                 <Text style={styles.btntext}>Reset Password</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={{alignSelf:'center',top:60}}>
                 <Text style={styles.hyperlink}>Back to Login</Text>
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
        width: 310,
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
       
        flex:1,
        // opacity:0.2,
        top:80,
        alignSelf:'center',
        height:420,
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
        marginBottom: 10,
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
export default ForgotPass