import React, { Component } from 'react';
import Toast from 'react-native-simple-toast';
import Modal from "react-native-modal";
import { TabNavigator } from 'react-navigation';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  Image,
  ImageBackground,
  TouchableOpacity,
  WebView
} from 'react-native';

export default class Item extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }
  static navigationOptions = ({navigation}) => ({
    title: 'Chi tiết phim',
    headerStyle: {
      backgroundColor: '#333',
    },
    headerTintColor: '#fff',
  })
  render() {
    const { params } = this.props.navigation.state;
    return (
        <View style={{flex:1,flexDirection:"column"}}>
          <View style={{flex:1/2}}>
            <ImageBackground style={{width:'100%',height:'100%'}} source={require('../images/daodianguc.jpg')}>

            </ImageBackground>
          </View>
          <View style={{flex:1/2,paddingTop:10,backgroundColor:'#292a2b'}}>
            <View style={{flexDirection:"row"}}>
                <Image
                style={{width:100,height:200,flex: 1,resizeMode: 'contain'}}
                source={require('../images/daodianguc_thumb.jpg')}
                />
              <View style={{flex:1,paddingRight:20}}>
                <Text style={{color:'#fff'}}>{params.name}</Text>
                <Text style={{color:'#fff'}}>{params.description}</Text>
                <View style={{marginTop:10}}>
                  <Button onPress={()=>{this.setState({isModalVisible: !this.state.isModalVisible})}} title="Xem trailer"/>
                </View>
                <View style={{marginTop:10}}>
                  <Button onPress={()=>{}} color="#841584" title="Mua Vé"/>
                </View>
              </View>
            </View>
          </View>
          {/* modal trailer */}
          <Modal isVisible={this.state.isModalVisible}>
            <View style={{ flex: 0.5,justifyContent:'center' }}>
              <Text>Hello!</Text>
              <WebView source={{ html: '<center><iframe width="100%" height="100%" src="https://www.youtube.com/embed/oneDEal9RXs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></center>' }} />
              <Button color="#841584" onPress={()=>{this.setState({isModalVisible: !this.state.isModalVisible})}} title="Hủy"/>
            </View>
          </Modal>
        </View>
    );
  }
}
