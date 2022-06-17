import {View, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import FloatingButton from '../components/ActionComponent/FloatingButton';
import OtpGeneratorComponent from '../components/OtpGeneratorComponent';
import HeaderComponent from '../components/HeaderComponent/Header';
import {useRoute} from '@react-navigation/native';
import {setGoBackScreenName} from '../redux/Actions/NavigationActions';
import {useDispatch} from 'react-redux';
const HomeScreen = props => {
  const route = useRoute();
  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch(setGoBackScreenName(route.name));
  }, []);
  return (
    <>
      <HeaderComponent title={'OxyShield'} />
      <View style={styles.container}>
        <OtpGeneratorComponent />
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
