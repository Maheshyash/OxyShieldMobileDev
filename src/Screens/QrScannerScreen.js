import React from 'react'
import QrCodeScannerComponent from '../components/ScannerComponent/QrCodeScannerComponent'
import FloatingButton from '../components/ActionComponent/FloatingButton'

const QrScannerScreen = (props) => {
  return (
    <>
      <QrCodeScannerComponent props={props}/>
      <FloatingButton 
        navigation={props.navigation}
      />
    </>
  )
}

export default QrScannerScreen