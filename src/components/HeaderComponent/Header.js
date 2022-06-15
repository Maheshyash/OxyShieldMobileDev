import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
// import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'
const HeaderComponent = ({title}) => {
    const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
        <Text style={styles.headerText}>{title}</Text>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
            <ImageBackground source={require('../../assets/images/avatar.png')} style={{width:35,height:35}} imageStyle={{borderRadius:25}}/>
            {/* <Ionicons name='contact' size={24} style={{width:35,height:35}}/>
            <ion-icon name="contact"></ion-icon> */}
        </TouchableOpacity>
    </View>
  )
}

export default HeaderComponent