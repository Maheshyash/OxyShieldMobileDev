import React,{useEffect} from 'react'
import QrCodeScannerComponent from '../components/ScannerComponent/QrCodeScannerComponent'
import FloatingButton from '../components/ActionComponent/FloatingButton'
import { useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setGoBackScreenName } from '../redux/Actions/NavigationActions';
const QrScannerScreen = (props) => {
  const route = useRoute();
  const dispatch = useDispatch();
  useEffect(()=>{
    return ()=> dispatch(setGoBackScreenName(route.name));
  },[])
  return (
    <>
      <QrCodeScannerComponent props={props}/>
      {/* <FloatingButton 
        navigation={props.navigation}
      /> */}
    </>
  )
}

export default QrScannerScreen