import React, { Component } from 'react';
import styles from '../stylesheets';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  FlatList,
  WebView,
  TouchableOpacity,
  ActivityIndicator,
  Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import Icon from 'react-native-vector-icons/Ionicons';

export default class Payment extends Component{
  constructor(props){
    super(props);
    this.state = {
      bookhistory: [
        {'thumb':'https://i.imgur.com/ik7IrFf.jpg','title':'Mua vé xem phim','description':'45.000đ'},
        {'thumb':'https://i.imgur.com/ik7IrFf.jpg','title':'Mua vé xem phim','description':'45.000đ'},
        {'thumb':'https://i.imgur.com/ik7IrFf.jpg','title':'Mua vé xem phim','description':'45.000đ'},
        {'thumb':'https://i.imgur.com/ik7IrFf.jpg','title':'Mua vé xem phim','description':'45.000đ'},
        {'thumb':'https://i.imgur.com/ik7IrFf.jpg','title':'Mua vé xem phim','description':'45.000đ'}
      ]
    };
    setTimeout(()=>{
      Alert.alert(
        'Time Out',
        'Vượt Quá thời gian giữ ghế?', [{
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
        }, {
            text: 'Quay Lại',
            onPress: () => {Actions.Home() }
        }, ], {
            cancelable: false
        }
      )
    },90000);
  }
  static navigationOptions = () => ({
    header: null,
  })

  render(){
    return (
      <View style={styles.view_main}>
        <View style={{flex:1/13,flexDirection:"row",justifyContent:'center',backgroundColor:'#f1f8fe'}}>
          <TouchableOpacity onPress={()=>{ Actions.pop()}} style={{flex:1,paddingLeft:10,justifyContent:'center'}} >
            <Icon name="ios-arrow-round-back" size={40} color="red" />
          </TouchableOpacity>
          <View style={{flex:7,justifyContent:'center'}}> 
            <Text> Payment </Text>
          </View>
          <View style={{flex:2,justifyContent:'center'}}>
            <ActivityIndicator size="small" color="red" />
          </View>
        </View>
      
        <View style={{flex:12/13,backgroundColor:'#e9ebee',justifyContent:'center'}}>
          <WebView
            renderLoading={this.ActivityIndicatorLoadingView}
            javaScriptEnabled={true}
            style={{justifyContent: 'center',alignItems: 'center'}}
            source={{ uri:'http://sandbox.vnpayment.vn/tryitnow/Home/CreateOrder'}} 
          />
        </View>
      </View>
    );
  }
}
