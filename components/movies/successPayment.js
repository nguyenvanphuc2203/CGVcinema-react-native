import React, { Component } from 'react';
import styles from '../stylesheets';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import Icon from 'react-native-vector-icons/Ionicons';

export default class SuccessPayment extends Component{
  constructor(props){
    super(props);
  }
  static navigationOptions = () => ({
    header: null,
  })
  render(){
    return (
      <View style={styles.view_main}>
        <View style={{flex:1/13,flexDirection:"row",justifyContent:'center',backgroundColor:'#f1f8fe'}}>
          <TouchableOpacity onPress={()=>{ Actions.Home()}} style={{flex:1,paddingLeft:10,justifyContent:'center'}} >
            <Icon name="ios-arrow-round-back" size={40} color="red" />
          </TouchableOpacity>
          <View style={{flex:7,justifyContent:'center'}}> 
            <Text>Bạn đã đặt vé thành công! </Text>
          </View>
          <View style={{flex:2,justifyContent:'center'}}> 
          </View>
        </View>
      
        <View style={{flex:12/13,backgroundColor:'#e9ebee',justifyContent:'center',alignItems:'center'}}>
          <View style={{width:'50%',height:'50%'}}>
            <Text>vui lòng kiểm tra email, sdt để lấy mã đặt vé</Text>
            <Button onPress={()=>{ Actions.Home() }} color="red" title="Về Trang Chủ"/>
          </View>
        </View>
      </View>
    );
  }
}
