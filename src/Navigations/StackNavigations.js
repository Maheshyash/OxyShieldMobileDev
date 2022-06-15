import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen';
import QrScannerScreen from '../Screens/QrScannerScreen';
import AddAccountScreen from '../Screens/AddAccountScreen';
const Stack = createStackNavigator();
const StackNavigations = () => {
  return (
    <Stack.Navigator initialRouteName='AddAccount' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Scanner" component={QrScannerScreen} />
      <Stack.Screen name="AddAccount" component={AddAccountScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigations