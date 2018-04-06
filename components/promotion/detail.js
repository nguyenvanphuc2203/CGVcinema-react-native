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
import Icon from 'react-native-vector-icons/Ionicons';

export default class Detail extends React.Component {
  constructor(props){
    super(props);

  }
  static navigationOptions = () => ({
    title: 'Thông tin Khuyễn mãi',
    headerStyle: {
      backgroundColor: '#FFF',
    },
    header: null,
  })
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.view_main}>
        <View style={{flex:1/13,flexDirection:"row",justifyContent:'center',backgroundColor:'#fff'}}>
          <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{flex:1,paddingLeft:10,justifyContent:'center'}} >
            <Icon name="ios-arrow-round-back" size={40} color="red" />
          </TouchableOpacity>
          <View style={{flex:7,justifyContent:'center'}}> 
            <Text>Thông tin chi tiết</Text>
          </View>
          <View style={{flex:2,justifyContent:'center'}}> 
          </View>
        </View>
        <View style={{flex:12/13,marginTop:6}}>
            <View style={{flex:1,flexDirection:'column',padding:5,backgroundColor:'#fff'}}>
              <View style={{flex:3}}>
                <Image
                  style={{width:'100%',height:'100%'}}
                  source={require('../images/banner_film1.jpg')}
                />
              </View>
              <View style={{flex:6}}>
              <Text style={{fontWeight:'bold'}}>
              Đừng bỏ lỡ ngày truyền thống “METIZ DAY” - Ngày THỨ BA ĐẦU TIÊN của mỗi tháng với những ưu đãi hết sức đặc biệt!
              Các khách hàng sẽ được xem phim thả ga với giá vé đồng nhất 45.000 đồng/ vé 2D và 50.000 đồng/ vé 3D cho mọi suất chiếu tại Metiz Cinema. 
              Đặc biệt, tặng ngay Voucher Combo Bắp & nước 20.000 đồng khi mua 2 vé các bạn nhé! 
              </Text>
              </View>
              <View style={{flex:2,padding:2}}>
                <Text style={{fontWeight:'bold'}}> Tất cả >></Text>
              </View>
            </View>
        </View>
      </View>
    );
  }
}
