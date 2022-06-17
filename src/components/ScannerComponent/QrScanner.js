import {
  StyleSheet,
  View,
  Text,
  Alert,
} from 'react-native';
import React from 'react';
import {bindActionCreators} from 'redux';
import {setSecretKeyUserData} from '../../redux/Actions/SecretKeyActions';
import {connect} from 'react-redux';
import {RNCamera} from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';
import {URL, URLSearchParams} from 'react-native-url-polyfill';
import Options from '../common/OptionDataForLogos';
import Ionicons from 'react-native-vector-icons/Ionicons'
class QrScanner extends React.Component {
  constructor(props) {
    super(props);
    this.camera = null;
    this.state = {
      isError: false,
    };
  }
  getLogo = applicationName => {
    const imageInfo = Options.filter(
      item => item.application_name == applicationName,
    ).map(ele => ele.image);
    return imageInfo.length > 0 ? imageInfo[0] : '';
  };
  onFailure = () => {
    this.setState({isError: true});
    this.setState({isActive: false});
    return Alert.alert('Alert', 'Invalid URL', [
      {
        text: 'OK',
        onPress: () => {
          this.setState({isError: false});
        },
      },
    ]);
  };
  onSuccess = e => {
    this.setState({isError: true});
    if (e.hasOwnProperty('data')) {
      if (!e.data.includes('otpauth://totp/')) return this.onFailure();
      var URLData = e.data;
      var URLInfo = new URL(URLData);
      const secret_key = URLInfo.searchParams.get('secret');
      const application_name = URLInfo.searchParams.get('AppName');
      const company_name = URLInfo.searchParams.get('appowner');
      const image = this.getLogo(application_name);
      let userData = {
        secret_key,
        application_name,
        company_name,
        image,
      };
      if (secret_key == null) return this.onFailure();
      else if (application_name == null) return this.onFailure();
      else if (company_name == null) return this.onFailure();
      // this.props.setSecretKeyUserData(userData);
      Alert.alert('Alert', 'Success', [
        {
          text: 'OK',
          onPress: () => {
            this.setState({isError: false}),
              this.props.setSecretKeyUserData(userData),
              this.props.navigation.navigate('Home');
          },
        },
      ]);
      // this.props.navigation.navigate('Home');
      // this.setState({isError:true})
      // Alert.alert(
      //   "Alert",
      //   "Invalid URL",
      //   [
      //     // {
      //     //   text: "Cancel",
      //     //   onPress: () => this.setState({isError:false}),
      //     //   style: "cancel"
      //     // },
      //     { text: "OK", onPress: () => this.setState({isError:false}) }
      //   ]
      // );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        {this.state.isError == !true && (
          <RNCamera
            style={{flex: 1, alignItems: 'center'}}
            ref={ref => {
              this.camera = ref;
            }}
            onBarCodeRead={this.state.isError == !true && this.onSuccess}>
            <BarcodeMask
              width={300}
              height={300}
              showAnimatedLine={true}
              outerMaskOpacity={0.5}
              animatedLineColor="green"
            />
            <View
              style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              <View style={styles.header}>
                <Ionicons name="arrow-back-outline" size={30} color={'white'} onPress={()=>this.props.navigation.replace(this.props.goBack)} style={styles.backIcon}/>
                <Text style={{fontSize: 22, color: 'white'}}>
                  {' '}
                  Scan Qr-code{' '}
                </Text>
              </View>
            </View>
          </RNCamera>
        )}
      </View>
    );
  }
}
const mapStateToProps = state =>({
  goBack:state.navigationData.goBack
})
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({setSecretKeyUserData}, dispatch),
});
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
export default connect(mapStateToProps, mapDispatchToProps)(QrScanner);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  header: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#396EB0',
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  backIcon:{
    marginRight:10
  }
});
