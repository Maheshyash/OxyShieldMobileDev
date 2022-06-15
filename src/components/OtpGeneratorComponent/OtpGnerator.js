import {ScrollView, View, Text, StyleSheet, TouchableHighlight,Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import colors from '../../assets/theme/colors'

const OtpGnerator = ({userData})=> {
    // const secret_key = "ILQYFDXK4RZJMUWWPNWYJI2P4TK6H64U"
  const userDetails = useSelector(state => state);
  const [sec, setsec] = useState()
  const totp = require('totp-generator');
  const date = new Date();
  const time1 = date.getTime();
  const token = userData.item.secret_key
    ? totp(userData.item.secret_key, {timestamp: time1})
    : '';
  const [Otp, setOtp]= useState(token)
  const useProgress = () => {
    useEffect(() => {
      const intervalId = setInterval(() => {
        if (new Date().getSeconds() > 30) {
          setsec(new Date().getSeconds() - 30);
        } else {
          if (new Date().getSeconds() == 0) {
            return setsec(30);
          }
          setsec(new Date().getSeconds());
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);
    return sec;
  };
  useEffect(()=>{
    if(sec==1){
      const time1 = date.getTime();
    const token = userData.item.secret_key
    ? totp(userData.item.secret_key, {timestamp: time1})
    : '';
    setOtp(token)
    }
  },[sec])
  const getTimerColor = sec => {
    return sec > 20 ? 'red' : 'green';
  };
  var progress = useProgress();
  return (
      // <View style={styles.itemlist}>
      //   <View>
      //     <Text style={[styles.timer, {color: getTimerColor(sec)}]}>{progress}</Text>
      //   </View>
      //   <Text style={styles.datas}>{token}</Text>
      // </View>
      <TouchableHighlight style={[styles.rowFrontVisible]}>
        <View style={styles.rowContainer}>
          <View style={{width:"15%",alignItems:'center',justifyContent:'center'}}>
            <Text style={[styles.timer, {color: getTimerColor(sec)}]}>{progress}</Text>
          </View>
          <View style={{}}>
            <Text style={[styles.datas]}>{Otp}</Text>
            <Text style={styles.applicationNameText}>{userData.item.application_name}</Text>
            <Text style={styles.companyNameText}>{userData.item.company_name}</Text>
          </View>
          <Image source={userData.item.image} style={styles.image}/>
        </View>
      </TouchableHighlight>
      // <View></View>
  );
};

export default OtpGnerator;

const styles = StyleSheet.create({
  // itemlist: {
  //   minHeight: 100,
  //   backgroundColor: 'yellow',
  //   width: '100%',
  //   marginVertical: 5,
  //   borderRadius: 20,
  //   elevation: 5,
  //   shadowColor: 'black',
  //   shadowOpacity: 0.1,
  //   shadowOffset: {width: 0, height: 10},
  //   shadowRadius: 20,
  //   padding: 10,
  //   textAlign: 'center',
  //   alignItems: 'center',
  //   flexDirection: 'row',
  // },
  datas: {
    letterSpacing: 15,
    fontSize: 30,
    color: '#000',
  },
  timer: {
    fontSize: 30,
    color: '#000',
    // width:"15%"
  },
  rowFrontVisible: {
    backgroundColor: '#D7E9F7',
    borderRadius: 5,
    paddingVertical: 10,
    paddingVertical:0,
    marginBottom: 15,
    elevation: 5,
    shadowColor: 'black',
    marginLeft: 5,
    marginRight: 5,
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 20,
    borderTopColor: colors.secondary1,
    borderTopWidth: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#666',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    borderRadius: 25,
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  companyNameText: {
    fontWeight: '900',
    color: colors.black,
    fontSize: 18,
    marginLeft: 11,
  },
  applicationNameText: {color: colors.black, fontSize: 15, marginLeft: 11},
});
