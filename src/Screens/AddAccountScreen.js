import React,{useEffect} from 'react';
import FloatingButton from '../components/ActionComponent/FloatingButton';
import AddAccountComponent from '../components/AddAccountComponent';
import {setGoBackScreenName} from '../redux/Actions/NavigationActions';
import { useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
const AddAccountScreen = props => {
  const route = useRoute();
  const dispatch = useDispatch();
  useEffect(()=>{
    return ()=> dispatch(setGoBackScreenName(route.name));
  },[])
  return (
    <>
      <AddAccountComponent />
      <FloatingButton 
        navigation={props.navigation}
      />
    </>
  );
};

export default AddAccountScreen;
