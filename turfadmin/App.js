import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Dateselect from './Dateselect';
import ViewBookings from './ViewBookings';
import Query from './Query';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
    <Stack.Screen name='Login' component={Login}></Stack.Screen>
    <Stack.Screen name='Home' component={Home}></Stack.Screen>
    <Stack.Screen name='Signup' component={Signup}></Stack.Screen>
    <Stack.Screen name='Dateselect' component={Dateselect}></Stack.Screen>
    <Stack.Screen name='ViewBookings' component={ViewBookings}></Stack.Screen>
    <Stack.Screen name='Query' component={Query}></Stack.Screen>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
