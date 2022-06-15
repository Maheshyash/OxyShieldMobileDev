import {View, Text} from 'react-native';
import React from 'react';
import QrScanner from './QrScanner';

const QrCodeScannerComponent = ({props}) => {
  console.log(props, 'props inside QrCodeScannerComponent');
  return (
    <>
      <QrScanner navigation={props.navigation} />
    </>
  );
};

export default QrCodeScannerComponent;
