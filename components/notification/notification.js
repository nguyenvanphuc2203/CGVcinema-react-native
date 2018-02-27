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
import { TabNavigator } from 'react-navigation';

export default class Notification extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notification : [
        { 'name' :'Tặng 10000 vé xem phim', 'description':'bộ phim được khởi chiếu trên toàn quốc','thumbnail':'https://uat.metiz.vn/static/assets/websites/images/voucher_img2.jpg'},
        { 'name' :'Tặng 1 combo bắp nước', 'description':'bộ phim được khởi chiếu trên toàn quốc','thumbnail':'https://uat.metiz.vn/static/assets/websites/images/voucher_img.jpg'},
        { 'name' :'Khai trương', 'description':'bộ phim được khởi chiếu trên toàn quốc','thumbnail':'https://uat.metiz.vn/media/slide_home/METIZ_KHAI_TRUONG_GRAND_OPENING_MEDIA-11_yLRkxW0.jpg'}
      ],
    }
  }
  static navigationOptions = () => ({
    header: null
  })
  render() {
    return (
      <View style={{flex:1,backgroundColor:'black'}}>
        <FlatList
        data={this.state.notification}
        renderItem={({item}) =>
        <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Detail',{title:item.name,description:item.description})}}>
          <View style={{flex:1,flexDirection:'column',backgroundColor:'#333',marginTop:10}}>
            <View >
              <Image
              style={{width:'100%',height:300,flex: 1,resizeMode: 'contain'}}
              source={{ uri: item.thumbnail }}
              />
            </View>
            <View style={{flex:0.4,justifyContent:'center',paddingLeft:10}}>
              <Text style={{color:'#fff'}}>{item.name}</Text>
              <Text style={{color:'#fff'}}>{item.description}</Text>
            </View>
          </View>
        </TouchableOpacity>
        }
        />
      </View>
    );
  }
}
