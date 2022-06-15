import {View, StyleSheet} from 'react-native';
import React from 'react';
import FloatingButton from '../components/ActionComponent/FloatingButton';
import OtpGeneratorComponent from '../components/OtpGeneratorComponent';
import HeaderComponent from '../components/HeaderComponent/Header';
const HomeScreen = props => {
  return (
    <>
      <HeaderComponent title={'OxyShield'} />
      <View style={styles.container}>
        <OtpGeneratorComponent />
      </View>
      <FloatingButton navigation={props.navigation} />
    </>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  textBold: {
    fontWeight: '500',
    fontSize: 40,
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'black',
  },
  container: {
    padding: 10,
    backgroundColor: '#f1f3ffff',
    flex: 1,
  },
});
