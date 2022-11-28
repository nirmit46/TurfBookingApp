import { View, Text, ImageBackground, TouchableOpacity, Image, Animated, ScrollView, ToastAndroid } from 'react-native'
import React, { useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { useEffect } from 'react'
import { TextInput } from 'react-native-paper'
import axios from 'axios'
import { Alert } from 'react-native'

const Signup = ({ navigation }) => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const [phoneno, setphoneno] = useState("");
    const [confirm, setconfirm] = useState("")

    const validate = () => {
        const emailregex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
        const passwordregex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if ((username == "") || (email == "") || (password == "")) {
            ToastAndroid.show("Input all fields", ToastAndroid.SHORT);
        }
        else if (!emailregex.test(email)) {
            ToastAndroid.show("Enter proper email", ToastAndroid.SHORT);

        }
        else if (!passwordregex.test(password)) {
            ToastAndroid.show("Password should be of 8 digits contain 1 uppercase,1 lowercase and 1 special character", ToastAndroid.SHORT);

        }

        else if (password != confirm) {
            ToastAndroid.show("Passwords do not match", ToastAndroid.SHORT);

        }

       
        else {
            Alert.alert("Confirm", "Are you sure you want to continue?", [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { text: "OK", onPress: () => navlog() }
            ],
                { cancelable: true })
        }
    }
    const register = async () => {
        await axios({
            method: 'POST',
            url: 'http://192.168.0.109:8081/addadmin',
            data: {
                username: username,
                email: email,
                password: password,
            }
        })
            .then(function (response) {
                console.log("response ", JSON.stringify(response.data))
                //   alert(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log("error", error)
                alert(error);
            })
    }
    const navlog = () => {
        register();
        ToastAndroid.show("Sign up Successful", ToastAndroid.SHORT);
        navigation.navigate("Login");
    }
    const show = () => {
        ToastAndroid.show("Sign up Successful", ToastAndroid.SHORT);
        navigation.navigate("Login");
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
            <ImageBackground style={{ flex: 1 }} source={require('./assets/onboard.jpg')}>
                <Image style={styles.img} source={require('./assets/Trickshot.png')}></Image>
                <View style={styles.card}>
                    <ScrollView>
                        <Text style={styles.heading}>Add Admin</Text>

                        <TextInput activeUnderlineColor='transparent' left={<TextInput.Icon style={{ top: 4 }} icon="account" />} underlineColor='transparent' onChangeText={(username) => setusername(username)} style={styles.input} placeholder='Username'></TextInput>
                        <TextInput activeUnderlineColor='transparent' left={<TextInput.Icon style={{ top: 4 }} icon="email" />} underlineColor='transparent' onChangeText={(email) => setemail(email)} style={styles.input} placeholder='Email'></TextInput>
                        <TextInput secureTextEntry={true} activeUnderlineColor='transparent' left={<TextInput.Icon style={{ top: 4 }} icon="lock" />} underlineColor='transparent' onChangeText={(password) => setpassword(password)} style={styles.input} placeholder='Password'></TextInput>
                        <TextInput secureTextEntry={true} activeUnderlineColor='transparent' left={<TextInput.Icon style={{ top: 4 }} icon="lock-alert" />} underlineColor='transparent' onChangeText={(confirm) => setconfirm(confirm)} style={styles.input} placeholder='Confirm Password'></TextInput>
                        <TouchableOpacity onPress={validate} style={styles.btn}>
                            <Text style={styles.btntext}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={{ alignSelf: 'center', top: 60 }}>
                            <Text style={styles.hyperlink}>Back To Login</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    img: {
        top: 20,
        height: 200,
        width: 250,
        resizeMode: 'cover',
        alignSelf: 'center'
    },
    heading: {
        color: 'white',
        top: 20,
        left: 20,
        //    alignSelf:'left',
        fontSize: 25,
        fontWeight: 'bold'
    },
    card: {

        flex: 1,
        // opacity:0.2,
        // top:120,
        alignSelf: 'center',
        height: 390,
        width: 395,
        backgroundColor: 'rgba(255,255,255,0.2)',
        // borderRadius:40,
        borderTopStartRadius: 40,
        borderTopEndRadius: 40
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
        marginBottom: 40,
        backgroundColor: '#5adbb5',
        borderRadius: 17,
        // marginBottom:20
    },
    btntext: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    input: {
        margin: 20,
        top: 30,
        alignSelf: 'center',
        height: 50,
        width: 300,
        borderRadius: 20,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: 'white',
        // borderColor:'black',
        borderWidth: 2,
        padding: 5,
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    hyperlink: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 15,
        marginBottom: 100,
    }
});
export default Signup