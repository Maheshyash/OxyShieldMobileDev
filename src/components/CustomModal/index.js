import { View, Text,TouchableHighlight,TouchableOpacity,SafeAreaView,Modal, StyleSheet, Image } from 'react-native'
import React,{useEffect, useState} from 'react'
import ModalPicker from './ModalPicker'
const Options = [{application_name:'drishti',image:require('../../assets/images/drishti.png')},{application_name:'aristi',image:require('../../assets/images/aristi.jpg')},{application_name:'collaxy',image:require('../../assets/images/collaxy.jpg')}]
const CustomModal = () => {
    const [chooseData, setChooseData] = useState("select your logo")
    const [chooseImage, setChooseImage] = useState(null)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const changeModalVisibility = (bool) =>{
        setIsModalVisible(bool)
    }
    const setData = (data) => {
        setChooseData(data.application_name)
        setChooseImage(data.image)
    }
    useEffect(()=>{
      setChooseImage(null)
      setChooseData("select your logo")
      return () =>{
        console.log('leaving the custome Modal')
      }
    },[])
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> changeModalVisibility(true)} style={styles.touchableOpacity}>
           <Text style={styles.text}> {chooseData}</Text>
           <Image source={chooseImage} style={styles.image}/>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={()=>changeModalVisibility(false)}
      >
      <ModalPicker 
        changeModalVisibility = {changeModalVisibility}
        setData = {setData}
        // Options={Options}
      />
      </Modal>
    </View>
  )
}

export default CustomModal

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#DADDFC',
        alignItems:'center',
        justifyContent:'center',
        padding:5,
        marginBottom:10

    },
    text:{
        marginVertical:10,
        fontSize:18,
    },
    touchableOpacity:{
        alignSelf:'stretch',
        paddingHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    image:{
        borderRadius:10,
        width:50,
        height:50,
        resizeMode: 'cover'
    }
})