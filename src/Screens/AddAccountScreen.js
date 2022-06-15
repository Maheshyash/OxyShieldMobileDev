import React from 'react';
import FloatingButton from '../components/ActionComponent/FloatingButton';
import AddAccountComponent from '../components/AddAccountComponent';

const AddAccountScreen = props => {
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
