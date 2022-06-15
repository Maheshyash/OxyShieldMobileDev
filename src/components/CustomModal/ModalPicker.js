import { View, Text,StyleSheet,TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native'
import React, { useEffect } from 'react'
// import Ionicons from 'react-native-vector-icons/Ionicons'
import { setUserImageData } from '../../redux/Actions/SecretKeyActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Options from '../common/OptionDataForLogos'
// const Options = [
//   {
//     application_name: 'drishti',
//     image: require('../../assets/images/drishti.png'),
//   },
//   {
//     application_name: 'aristi',
//     image: require('../../assets/images/aristi.png'),
//   },
//   {
//     application_name: 'flowxi',
//     image: require('../../assets/images/flowxy.png'),
//   },
//   {
//     application_name: 'leap',
//     image: require('../../assets/images/leap.png'),
//   },
//   {
//     application_name: 'CAC',
//     image: require('../../assets/images/cac.jpg'),
//   },
// ];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const ModalPicker = (props) => {
    const onPressItem = data => {
        props.changeModalVisibility(false)
        props.setData(data)
        props.setUserImageData(data);
    }
    const option = Options.map((item,index)=>{
        return(
            <TouchableOpacity
                style={styles.option}
                onPress={()=> onPressItem(item)}
                key={index}
            >
                <Text style={styles.text}>{item.application_name}</Text>
                <Image source={item.image}style={styles.image}/>

            </TouchableOpacity>
        )
    })
  return (
    <TouchableOpacity
    style={styles.contianer}
    onPress={()=>props.changeModalVisibility(false)}
    >
        <ScrollView style={[styles.modal,{width:WIDTH - 20, height:HEIGHT/2}]}>
          {/* <Ionicons name="close-outline" size={32} onPress={(e)=>{e.stopPropagation(),props.changeModalVisibility(false)}} style={styles.closeIcon}/> */}
            {option}
        </ScrollView>    
    </TouchableOpacity>
  )
}
const mapDispatchToProps = dispatch =>({
  ...bindActionCreators({setUserImageData},dispatch)
})
const mapStateToProps = state =>({

})
export default connect(mapStateToProps, mapDispatchToProps)(ModalPicker)
const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:"#a3bfe6"
  },
  modal: {
    position: 'relative',
    backgroundColor: '#a3bfe6',
    borderRadius: 10,
    maxHeight: 300,
  },
  option: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // flex:1,
    paddingHorizontal: 20,
  },
  text: {
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    fontWeight: '',
  },
  image: {
    borderRadius: 10,
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  closeIcon: {
    alignSelf: 'flex-end',
    backgroundColor: '#a3bfe6',
    borderRadius: 16,
    paddingRight: 15,
    color: 'red',
  },
});