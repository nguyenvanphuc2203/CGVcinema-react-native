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
import { Actions } from 'react-native-router-flux'; // New code
class Notification extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notification : [
        { 'name' :'Tặng 10000 vé xem phim', 'description':'bộ phim được khởi chiếu trên toàn quốc','thumbnail':'https://uat.metiz.vn/static/assets/websites/images/voucher_img2.jpg'},
        { 'name' :'Tặng 1 combo bắp nước', 'description':'bộ phim được khởi chiếu trên toàn quốc','thumbnail':'https://uat.metiz.vn/static/assets/websites/images/voucher_img.jpg'},
        { 'name' :'Khai trương', 'description':'bộ phim được khởi chiếu trên toàn quốc','thumbnail':'https://uat.metiz.vn/media/slide_home/METIZ_KHAI_TRUONG_GRAND_OPENING_MEDIA-11_yLRkxW0.jpg'},
        { 'name' :'Tặng 10000 vé xem phim', 'description':'bộ phim được khởi chiếu trên toàn quốc','thumbnail':'https://uat.metiz.vn/static/assets/websites/images/voucher_img2.jpg'},
        { 'name' :'Tặng 1 combo bắp nước', 'description':'bộ phim được khởi chiếu trên toàn quốc','thumbnail':'https://uat.metiz.vn/static/assets/websites/images/voucher_img.jpg'},
        { 'name' :'Khai trương', 'description':'bộ phim được khởi chiếu trên toàn quốc','thumbnail':'https://uat.metiz.vn/media/slide_home/METIZ_KHAI_TRUONG_GRAND_OPENING_MEDIA-11_yLRkxW0.jpg'},
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
    let { dispatch } = this.props;
    return (
      <View style={{flex:1,backgroundColor:'#eaebee'}}>
        <FlatList
        data={this.state.notification}
        renderItem={({item}) =>
        <TouchableOpacity onPress={()=>{ Actions.NotificationDetail({title:item.title,description:item.description}) }}>
          <View style={{height:100,flexDirection:'row',backgroundColor:'#fff',marginTop:5}}>
            <View style={{bottom:1,flex:1}}>
              <Image
              style={{width:'100%',height:240,flex: 1,resizeMode: 'contain'}}
              source={{ uri: item.thumbnail }}
              />
            </View>
            <View style={{bottom:1,flex:2,opacity:50,justifyContent:'center',paddingLeft:10}}>
              <Text style={{color:'#333'}}>{item.name}</Text>
              <Text style={{color:'#333'}}>{item.description}</Text>
            </View>
          </View>
        </TouchableOpacity>
        }
        />
      </View>
    );
  }
}

export default connect(state=>state)(Notification)