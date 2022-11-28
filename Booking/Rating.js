import { View, Text, ImageBackground, TouchableOpacity, Image, Animated, ToastAndroid, FlatList } from 'react-native'
import React, { useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { useEffect } from 'react'
import { Avatar, Button, Chip, TextInput } from 'react-native-paper'
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins'
import { Card } from 'react-native-paper'
import axios from 'axios'

const Rating = ({ route, navigation }) => {
    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
      });

    //   if (!fontsLoaded) {
    //     return null;
    //   }
    const [name, setname] = useState("");
    const [email, setemail] = useState("")
    const [phoneno, setphoneno] = useState("");
    const [like, setlike] = useState("");
    const { username } = route.params;
    const [defaultrating, setdefaultrating] = useState(2)
    const [maxrating, setmaxrating] = useState([1, 2, 3, 4, 5])
    const starempty = "https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true";
    const starfull = "https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true";

    const validate=()=>{
        const emailregex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
        if((name=="")||(email=="")||(like=="")||(phoneno=="")){
          ToastAndroid.show("Input all fields",ToastAndroid.SHORT);
        }
        else if(!emailregex.test(email)){
          ToastAndroid.show("Enter proper email",ToastAndroid.SHORT);
    
        }
        else if(phoneno.length!=10){
            ToastAndroid.show("Phone number should be 10 digit",ToastAndroid.SHORT);
        }
        else{
            addreview();
        }
    }
    

    const addreview = async () => {
        await axios({
          method: 'POST',
          url: 'http://192.168.0.109:8081/addreview',
          data: {
            name: name,
            email: email,
            phoneno: phoneno,
            like:like,
            star:defaultrating,
          }
        })
          .then(function (response) {
            console.log("response ", JSON.stringify(response.data))
            ToastAndroid.show("Review Published",ToastAndroid.SHORT);
          })
          .catch(function (error) {
            console.log("error", error)
            alert(error);
          })
      }
    
    const CustomRatingBar = () => {
        return (
            <View style={styles.bar}>
                {
                    maxrating.map((item, key) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                key={item}
                                onPress={() => setdefaultrating(item)}
                            >
                                <Image
                                    style={styles.starimg}
                                    source={
                                        item <= defaultrating
                                            ? { uri: starfull }
                                            : { uri: starempty }
                                    }
                                ></Image>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }


    return (
        <View style={{ flex: 1, top: 30 }}>
            <Text style={styles.heading}>Rate our Services</Text>
            <Card style={styles.form}>
                <TextInput activeUnderlineColor='transparent' left={<TextInput.Icon style={{ top: 4 }} icon="account" />} onChangeText={(name)=>setname(name)} underlineColor='transparent' style={styles.input} placeholder='Name'></TextInput>
                <TextInput activeUnderlineColor='transparent' left={<TextInput.Icon style={{ top: 4 }} icon="email" />} onChangeText={(email)=>setemail(email)} underlineColor='transparent' style={styles.input} placeholder='Email'></TextInput>
                <TextInput keyboardType='number-pad' activeUnderlineColor='transparent' left={<TextInput.Icon style={{ top: 4 }} icon="cellphone" />} onChangeText={(phoneno)=>setphoneno(phoneno)} underlineColor='transparent' style={styles.input} placeholder='Phone Number'></TextInput>
                <TextInput numberOfLines={4} activeUnderlineColor='transparent' left={<TextInput.Icon style={{ top: 4 }} icon="thumb-up-outline" />} onChangeText={(like)=>setlike(like)} underlineColor='transparent' style={styles.input} placeholder='What did you like'></TextInput>
                <CustomRatingBar></CustomRatingBar>
                <TouchableOpacity onPress={validate} style={styles.btn}>
                    <Text style={styles.btntext}>Review</Text>
                </TouchableOpacity>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        top: 60,
        left: 10,
        fontFamily: 'Poppins_500Medium',
        fontSize: 30,

    },
    info: {
        marginTop: 50,
        width: 360,
        height: 150,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        alignSelf: 'center',
        // backgroundColor:'grey'
    },
    infotext: {
        bottom: 10,
        left: 72,
        fontSize: 15,
    },
    paymentmode: {
        alignSelf: 'center',
        height: 50,
        width: 150,
        borderColor: 'black',
        backgroundColor: 'pink',
        borderRadius: 20,
        margin: 15,
        top: -15,
    },
    paymenttext: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
        fontFamily: 'Poppins_500Medium'
    },
    form: {
        top:100,
        alignSelf: 'center',
        height: 480,
        width: 350,
    },
    input: {
        top: 15,
        margin: 10,
        alignSelf: 'center',
        height: 40,
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
    btn: {
        // opacity:0.8,
        justifyContent: 'center',
        // left:20,
        alignSelf: 'center',
        top: 20,
        borderColor: 'white',
        height: 50,
        width: 300,
        marginBottom: 20,
        backgroundColor: '#00a46c',
        borderRadius: 17,
        // marginBottom:20
    },
    btntext: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    bar: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30
    },
    starimg: {
        width: 40,
        height: 40,
        resizeMode: 'cover'
    }
});
export default Rating