import React, { Component } from 'react';
import Toast from 'react-native-simple-toast';
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

export default class Booking extends Component<{}> {
  constructor(props){
    super(props);
  }
  static navigationOptions = ({navigation}) => ({
    title: 'Chọn Ghế',
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
        <Image
          source={{uri:'https://i.imgur.com/cTLlz0F.png'}}
          style={{width:24,height:24,marginRight:10}}
        >
        </Image>
      </TouchableOpacity>
    )
  })
  render() {

    return (
        <View style={{flex:1,flexDirection:"column",backgroundColor:'#fff',alignItems:'center'}}>
          <View style={{flex:0.5/10,margin:5,width:'80%',height:10,borderWidth:2,borderColor:'#333',alignItems:'center'}}>
            <Text> Màn Hình Chính </Text>
          </View>
          <View style={{flex:9.5/10,flexDirection:"column"}}>
            <View style={{flex:1/2,flexDirection:"column"}}>
              <View style={{flex:1/10,flexDirection:"row"}}>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
              </View>
              <View style={{flex:1/10,flexDirection:"row"}}>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
              </View>
              <View style={{flex:1/10,flexDirection:"row"}}>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
              </View>
              <View style={{flex:1/10,flexDirection:"row"}}>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
                <Image source={{uri:'https://i.imgur.com/Ft1uaOV.png'}} style={{width:20,height:20,margin:3}}/>
              </View>
            </View>
          </View>
        </View>
    );
  }
}
