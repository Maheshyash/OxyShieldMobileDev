import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import StackNavigations from './StackNavigations';
// import Ionicons from 'react-native-vector-icons/Ionicons';
const Drawer = createDrawerNavigator();

export function DrawerNavigations() {
  return (
    <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false,
                        drawerActiveBackgroundColor:"#aa18ea",
                        drawerActiveTintColor:'#fff',
                        drawerInactiveTintColor:'#333',
                        drawerLabelStyle:{marginLeft:-25,fontSize:15}}}
        drawerContent={(props)=> <CustomDrawer {...props}/>}
        >
        {/* <Drawer.Screen name="Home" component={Home} 
            options={{
                drawerIcon:({color})=>(
                    <Ionicons name="home-outline" size={22} color={color}/>
                )
            }}
        />
        <Drawer.Screen name="scanner" component={QrScannerScreen} 
            options={{
                drawerIcon:({color})=>(
                    <Ionicons name="qr-code-outline" size={22} color={color}/>
                )
            }}
        />
        <Drawer.Screen name="addAccount" component={AddAccountScreen} 
            options={{
                drawerIcon:({color})=>(
                    <Ionicons name="create" size={22} color={color}/>
                )
            }}
        /> */}
        <Drawer.Screen name="StackNavigations" component={StackNavigations}/>
      </Drawer.Navigator>
  );
}