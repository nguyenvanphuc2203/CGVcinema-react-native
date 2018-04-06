import React, { Component } from 'react';
import styles from '../stylesheets';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  ActivityIndicator,
  AsyncStorage,
  StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code

export default class Wellcome extends Component{

  componentWillMount(){
    setTimeout(()=>{
      Actions.Drawermenu()
    },1000);
  }
  static navigationOptions = () => ({
    header: null
  })
  render(){
    return (
      <View style={styles.login}>
        <StatusBar
         backgroundColor="black"
         barStyle="light-content"
       />
        <View style={{alignItems:'center'}}>
          <Image
            style={{width: 150, height: 150}}
            source={require('../images/logo.png')}
          />
          <ActivityIndicator size="large" color="#fff" />
        </View>
      </View>
    )
  }
}
