import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Home';
import Dateselect from '../Dateselect';
import AboutUs from '../AboutUs';
import Contactus from '../Contactus';
import ViewBookings from '../ViewBookings';


const Tab = createBottomTabNavigator();
const CustomTabBarButton=({children,onPress})=>(
<TouchableOpacity style={{top:-25,justifyContent:'center',alignItems:'center',...styles.shadow}} onPress={onPress}>
    <View style={{width:70,height:70,borderRadius:35,backgroundColor:'#00a46c'}}>{children}</View>
</TouchableOpacity>
)
const Tabs = ({route}) => {
    const {username}=route.params;
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard:true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: 'white',
                    borderRadius: 15,
                    height: 80,
                    ...styles.shadow
                }

            }}>

            <Tab.Screen name='Home' component={Home} initialParams={{username:username}} options={{
                
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../assets/icons/home.png')}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#00a46c' : '#748c94'
                        }}
                    />
                ),
            }}></Tab.Screen>
             <Tab.Screen name='AboutUs' component={AboutUs} options={{
                
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../assets/icons/about.png')}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? '#00a46c' : '#748c94'
                        }}
                    />
                ),
            }}></Tab.Screen>
            <Tab.Screen name='DateSelect' initialParams={{username:username}}  component={Dateselect} options={{
                 tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../assets/icons/booking.png')}
                        resizeMode="contain"
                        style={{
                            width: 40,
                            height: 40,
                            tintColor: 'white'
                        }}
                    />
                ),
                tabBarButton:(props)=>(
                    <CustomTabBarButton {...props}></CustomTabBarButton>
                )
            }}></Tab.Screen>
            <Tab.Screen name='Contactus' component={Contactus} options={{
                
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../assets/icons/contact.png')}
                        resizeMode="contain"
                        style={{
                            bottom:2,
                            width: 35,
                            height: 35,
                            tintColor: focused ? '#00a46c' : '#748c94'
                        }}
                    />
                ),
            }}></Tab.Screen>
             <Tab.Screen name='ViewBookings' component={ViewBookings} initialParams={{username:username}} options={{
                
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../assets/icons/view.png')}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? '#00a46c' : '#748c94'
                        }}
                    />
                ),
            }}></Tab.Screen>
        </Tab.Navigator>

    )
}

const styles = StyleSheet.create({
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
    // icon: {
    //     width: 25,
    //     height: 25,
    //     tintColor: focused ? '#e32f45' : '#748c94'
    // },
});

export default Tabs
