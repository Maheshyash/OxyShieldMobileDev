import {
  ScrollView,
  FlatList,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {connect, useSelector} from 'react-redux';
import OtpGenerator from './OtpGnerator';
import {bindActionCreators} from 'redux';
import {
  setSecretKeyUserData,
  deleteSecretKeyUserData,
  updateSecretKeyUserData,
} from '../../redux/Actions/SecretKeyActions';
import {SwipeListView} from 'react-native-swipe-list-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/theme/colors';
const OtpGeneratorComponent = props => {
  const userDetails = useSelector(state => state.secreteData.userDetails);
  const state = useSelector(state => state);
  const [userDetailsinfo, setUserDetailsinfo] = useState([]);
  useEffect(() => {
    setUserDetailsinfo(
      userDetails.length > 0 &&
        userDetails.map((item, index) => ({
          key: `${index}`,
          secret_key: item.secret_key,
          application_name: item.application_name,
          company_name: item.company_name,
          image: item.image,
        })),
    );
  }, [userDetails]);

  // const renderItem = ({item}) => <OtpGenerator userData={item} />;
  let data = {
    secret_key: 'ILQYFDXK4RZJMUWWPNWYJI2P4TK6H64U',
  };
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };
  const [Dataa, setDataa] = useState([
    {
      key: 1,
      name: 'mahesh',
      id: '1',
    },
    {
      key: 2,
      name: 'mahesh royal',
      id: '2',
    },
  ]);
  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...userDetailsinfo];
    const prevIndex = userDetailsinfo.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setUserDetailsinfo(newData);
    props.updateSecretKeyUserData(newData);
  };
  // const VisibleItem = props => {
  //   const {data} = props;
  //   return (
  //     <TouchableHighlight style={styles.rowFrontVisible}>
  //       <View>
  //         <Text style={[styles.title, {color: 'black'}]}>
  //           {' '}
  //           {data.item.name}
  //         </Text>
  //       </View>
  //     </TouchableHighlight>
  //   );
  // };
  const renderItem = (data, rowMap) => {
    return <OtpGenerator userData={data} />;
  };
  const HiddenItemWithActions = props => {
    const {onClose, onDelete} = props;
    return (
      <View style={styles.rowBack}>
        <Text>Left</Text>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={onClose}>
          {/* <Text>Close</Text> */}
          <Ionicons
            name="close-circle-outline"
            size={22}
            color={colors.white}
            style={styles.trash}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={onDelete}>
          <Ionicons
            name="trash"
            size={22}
            color={colors.white}
            style={styles.trash}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const renderHiddenItem = (data, rowMap) => {
    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        onClose={() => closeRow(rowMap, data.item.key)}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      {userDetailsinfo.length > 0 ? (
        <SwipeListView
          data={userDetailsinfo}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={75}
          rightOpenValue={-150}
          disableRightSwipe={true}
          scrollEnabled={true}
          // ItemSeparatorComponent={()=>{return(
          //   <View style={{backgroundColor:'orange',height:2,marginBottom:10,width:"95%",alignSelf:'center'}}/>
          // )}}
        />
      ) : (
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 24,
              color: 'black',
              fontWeight: '600',
              marginBottom: 10,
            }}>
            WelCome 👋
          </Text>
          <Text style={{fontSize: 20, color: 'black', marginBottom: 10}}>
            This app Helps you to easily setup and maange 2-factor
            authentication for your accounts.
          </Text>
          <Text style={{fontSize: 20, color: 'black'}}>
            Use the <Text style={{fontSize: 24, fontWeight: '800'}}>+</Text>{' '}
            button below to{' '}
            <Text style={{fontWeight: '800'}}>SCAN a QR- code</Text> or{' '}
            <Text style={{fontWeight: '800'}}>Enter your token manually</Text>
          </Text>
        </View>
      )}
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {setSecretKeyUserData, deleteSecretKeyUserData, updateSecretKeyUserData},
    dispatch,
  ),
});
const mapStateToProps = state => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OtpGeneratorComponent);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 60,
    margin: 5,
    marginBottom: 15,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  rowFrontVisible: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 60,
    padding: 10,
    marginBottom: 15,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    margin: 5,
    marginBottom: 15,
    borderRadius: 10,
  },
  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    // alignItems:'center',
    position: 'absolute',
    top: 0,
    width: 75,
    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: colors.primary,
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: colors.danger,
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  trash: {
    height: 25,
    width: 25,
    marginRight: 7,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#666',
  },
  details: {
    fontSize: 12,
    color: '#999',
  },
});
