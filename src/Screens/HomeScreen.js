import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent/Header';
import FloatingButton from '../components/ActionComponent/FloatingButton';
const HomeScreen = props => {
  return (
    <>
      <View>
        <HeaderComponent title={'OxyShield'} />
      </View>
      <FloatingButton 
        navigation={props.navigation}
      />
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
