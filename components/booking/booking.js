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
  WebView,
  Picker
} from 'react-native';

export default class Booking extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      cinema : 'Rạp Metiz',
      date : 'Chọn Ngày Chiếu',
      time : 'Chọn Giờ Chiếu'
    }
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
      <View style={{flex:1,backgroundColor:'black'}}>
        <View style={{flex:1/10,flexDirection:"row",backgroundColor:'#333',marginTop:5}}>
          <View style={{flex:1,backgroundColor:'#fff',margin:5,borderRadius:5}}>
            <Picker
              selectedValue={this.state.cinema}
              onValueChange={(itemValue, itemIndex) => this.setState({cinema: itemValue})}>
              <Picker.Item label="Metiz" value="Metiz" />
            </Picker>
          </View>
          <View style={{flex:1,backgroundColor:'#fff',margin:5,borderRadius:5}}>
            <Picker
              selectedValue={this.state.date}
              onValueChange={(itemValue, itemIndex) => this.setState({date: itemValue})}>
              <Picker.Item label="Chọn Ngày Chiếu" value="10-12-2018" />
              <Picker.Item label="11-12-2018" value="11-12-2018" />
              <Picker.Item label="12-12-2018" value="12-12-2018" />
              <Picker.Item label="13-12-2018" value="13-12-2018" />
            </Picker>
          </View>
          <View style={{flex:1,backgroundColor:'#fff',margin:5,borderRadius:5}}>
            <Picker
              selectedValue={this.state.time}
              onValueChange={(itemValue, itemIndex) => this.setState({time: itemValue})}>
              <Picker.Item label="Chọn Giờ Chiếu" value="0" />
              <Picker.Item label="05:00" value="05:00" />
              <Picker.Item label="06:00" value="06:00" />
              <Picker.Item label="07:30" value="07:30" />
            </Picker>
          </View>
        </View>
        <View style={{flex:8/10,flexDirection:"column",backgroundColor:'#333',marginTop:5,alignItems:'center'}}>
          <View style={{flex:0.5/10,margin:5,width:'80%',height:10,borderWidth:2,backgroundColor:'#fff',borderColor:'#333',alignItems:'center'}}>
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
        <View style={{flex:1/10,marginTop:5,backgroundColor:'#333'}}>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:1,padding:5}}>
              <Button color="#d4466b" onPress={()=>{this.props.navigation.goBack()}} title="Trở lại"/>
            </View>
            <View style={{flex:1,padding:5}}>
              <Button onPress={()=>{this.props.navigation.navigate('Booking')}} color="#362f66" title="Thanh Toán"/>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
