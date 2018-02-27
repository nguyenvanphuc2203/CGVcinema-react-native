import React, { Component } from 'react';
import styles from '../stylesheets';
import { connect } from 'react-redux';
import { postStatus } from '../store/actions'
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
  Button,
  Alert,
  ScrollView,
  FlatList
} from 'react-native';

export default class Detail extends React.Component {
  constructor(props){
    super(props);

  }
  static navigationOptions = () => ({
    title: 'Thông tin Khuyễn mãi',
    headerStyle: {
      backgroundColor: '#333',
    },
    headerTintColor: '#fff',
  })
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={{flex:1,backgroundColor:'black',justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'#fff'}}>{params.title}</Text>
        <Text style={{color:'#fff'}}>{params.description}</Text>
      </View>
    );
  }
}
