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
  AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import Icon from 'react-native-vector-icons/FontAwesome';
import { Kohana } from 'react-native-textinput-effects';
export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      sdt:'0964357189',
      password:'admin'
    }
  }
  static navigationOptions = () => ({
    title: '',
    headerStyle: {
      backgroundColor: 'black',
      zIndex:1000
    },
    headerTintColor: '#fff',
  })
  async _login(){
    var sdt = this.refs.sdt._lastNativeText;
    var password = this.refs.password._lastNativeText;
    console.log(this.refs.sdt._lastNativeText)
    if ( sdt === this.state.sdt && password === this.state.password )
      {
        try {
          await AsyncStorage.setItem('@LoginMetiz:key', 'Logged');
          this.props.navigation.navigate('Tabbar');
        } catch (error) {
          console.log(error)
        }
      }
    else alert('lỗi đăng nhập');
  }
  render(){
    return (
      <View style={styles.login}>
        <View style={{alignItems:'center'}}>
          <Image
            style={{width: 150, height: 150}}
            source={require('../images/logo.png')}
          />
        </View>
        
        <View style={{height:150,paddingLeft:20,paddingRight:20}}>
          <Kohana
            style={{ backgroundColor: '#f9f5ed',marginTop:3 }}
            label={'Username'}
            iconClass={Icon}
            iconName={'user'}
            iconColor={'#f4d29a'}
            labelStyle={{ color: '#91627b' }}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            ref="sdt"
            keyboardType="numeric"
          />
          <Kohana
            style={{ backgroundColor: '#f9f5ed',marginTop:3 }}
            label={'Password'}
            iconClass={Icon}
            iconName={'lock'}
            iconColor={'#f4d29a'}
            labelStyle={{ color: '#91627b' }}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            secureTextEntry={true}
            ref="password"
          />
          <Button onPress={this._login.bind(this)} title="Login"/>
        </View>
      </View>
    );
  }
}
