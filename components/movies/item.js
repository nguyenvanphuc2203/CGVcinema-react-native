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
      data: [],
      isModalVisible: false,
    };
  }
  static navigationOptions = ({navigation}) => ({
    title: 'Chi tiết phim',
    headerTitleStyle: {
        marginLeft:70
    },
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#333',
      zIndex:1000
    },
    headerTintColor: '#fff',
    headerRight: (
      <TouchableOpacity onPress={()=>{navigation.goBack()}}>
      <Image source={{uri:'https://i.imgur.com/cTLlz0F.png'}} style={{width:24,height:24,marginRight:10}}
      ></Image>
      </TouchableOpacity>
    )
  })
  componentWillMount(){
    fetch('https://api.themoviedb.org/3/movie/'+this.props.navigation.state.params.id+'?api_key=e8631f0c8f0363c450d47ace4043eca5')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data:responseJson});
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    const { params } = this.props.navigation.state;
    return (
        <View style={{flex:1,flexDirection:"column"}}>
          <View style={{flex:1/2}}>
            <ImageBackground style={{width:'100%',height:'100%'}} source={{uri:'https://image.tmdb.org/t/p/w500'+this.state.data.backdrop_path}}>

            </ImageBackground>
          </View>
          <View style={{flex:1/2,paddingTop:10,backgroundColor:'#292a2b'}}>
            <View style={{flexDirection:"row"}}>
                <Image
                style={{width:100,height:200,flex: 1,resizeMode: 'contain'}}
                source={{uri:'https://image.tmdb.org/t/p/w500'+this.state.data.poster_path}}
                />
              <View style={{flex:1,paddingRight:20}}>
                <Text style={{color:'#fff'}}>{this.state.data.title}</Text>
                <Text style={{color:'#fff'}}>Thirty years after the events of the first film</Text>
                <View style={{marginTop:10}}>
                  <Button onPress={()=>{this.setState({isModalVisible: !this.state.isModalVisible})}} title="Xem trailer"/>
                </View>
                <View style={{marginTop:10}}>
                  <Button onPress={()=>{this.props.navigation.navigate('Booking')}} color="#841584" title="Mua Vé"/>
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
