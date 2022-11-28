import { View, Text, ImageBackground, TouchableOpacity, Image, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { useEffect } from 'react'

const GetStarted = ({ navigation }) => {
    const opacity = useRef(new Animated.Value(0)).current;
    const fadein = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true
        }).start()
    }
    useEffect(() => {
        fadein();

    }, [])

    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
            <ImageBackground style={{ flex: 1 }} source={require('./assets/onboard.jpg')}>
                <Image style={styles.img} source={require('./assets/Trickshot.png')}></Image>
                <Animated.View style={{opacity:opacity}}> 
                    <View>
                        <Text style={styles.heading}>Get Started</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.btn}>
                            <Text style={styles.btntext}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate("Signup")} style={[styles.btn,{backgroundColor:'#5adbb5'}]}>
                            <Text style={[styles.btntext,{color:'white'}]}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        top: 80,
        height: 200,
        width: 350,
        resizeMode: 'cover',
        alignSelf: 'center'
    },
    heading: {
        // opacity:0.8,
        color: 'white',
        top: 350,
        left: 15,
        fontSize: 40,
        fontWeight: 'bold'
    },
    btn: {
        // opacity:0.8,
        justifyContent: 'center',
        // left:20,
        alignSelf: 'center',
        top: 380,
        borderColor: 'white',
        height: 50,
        width: 300,
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 17
    },
    btntext: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight:'bold'
    }
});
export default GetStarted