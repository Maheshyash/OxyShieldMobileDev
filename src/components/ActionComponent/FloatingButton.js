   
import React, { Component } from 'react';
import {
  View,
  Animated,
  Text,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
// import { useNavigation } from '@react-navigation/native';
class FloatingButton extends Component {
  constructor(props){
    super(props)
  }
  state = {
    animation: new Animated.Value(0),
  };
  toggleOpen = () => {
    if (this._open) {
      Animated.timing(this.state.animation, {
        toValue: 0,
        // duration: 500,
        useNativeDriver:true,
      }).start();

    } else {

      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver:true,
      }).start();
    }
    this._open = !this._open

  };
  render() {
    const qrCode = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -80],
    });
    const secure = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -140],
    });
    const home = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -200],
    });
    const rotation = this.state.animation.interpolate({
      inputRange:[0,1],
		outputRange:["0deg","45deg"]
    });

    const qrcodeanimation = {
      transform: [
        {scale: this.state.animation},
        {
          translateY: qrCode,
        },
      ],
    };

    const secureAnimation = {
      transform: [
        {scale: this.state.animation},
        {
          translateY: secure,
        },
      ],
    };
    const homeAnimation = {
      transform: [
        {scale: this.state.animation},
        {
          translateY: home,
        },
      ],
    };
    const rotationAnimation = {
      transform: [
        {
          rotate: rotation,
        },
      ],
    };
    const {navigation} = this.props
    return (
      <View style={styles.wrapper}>
        {/* <Animated.View style={[styles.background]}> */}
          <TouchableWithoutFeedback onPress={() => {navigation.replace('Home'),this.toggleOpen()}}>
            <Animated.View style={[styles.button, homeAnimation,styles.secondary, styles.additioncolor2]}>
               {/* <Ionicons name="home-outline" size={20} color="#fff" /> */}
               <Image source={require('../../assets/images/Home.jpg')} style={{width:30,height:30, borderRadius:15}}/>
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => {navigation.replace('AddAccount'),this.toggleOpen()}}>
            <Animated.View style={[styles.button, secureAnimation,styles.secondary,styles.additioncolor1]}>  
              {/* <MaterialIcons name="input" size={20} color="#fff" /> */}
              <Image source={require('../../assets/images/addAccount.jpg')} style={{width:30,height:30, borderRadius:15}}/>
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() =>{ navigation.replace('Scanner'),this.toggleOpen()}}>
            <Animated.View style={[styles.button, qrcodeanimation,styles.secondary]}>
              {/* <MaterialIcons name="qr-code" size={20} color="#fff" /> */}
               <Image source={require('../../assets/images/scanner.jpg')} style={{width:30,height:30, borderRadius:15}}/>
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.toggleOpen()}>
            <Animated.View style={[styles.button,styles.menu,rotationAnimation]}>
               {/* <MaterialIcons name="add" size={24} color="#fff" /> */}
               <Text style={{fontSize:24,color:'white'}}>+</Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        {/* </Animated.View> */}
      </View>
    );
  }
}
// const NavigationProvider = (Component) => {
//   const Wrapper = (props) => {
//     const navigation = useNavigation();
//     return (
//       <Component
//         navigation={navigation}
//         {...props}
//         />
//     );
//   };
  
//   return Wrapper;
// };
export default (FloatingButton)