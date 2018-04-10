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
  Switch,
  Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import Icon from 'react-native-vector-icons/Ionicons';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

var ImagePicker = require('react-native-image-picker');

// More info on all the options is below in the README...just some common use cases shown here
var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};


export default class Profile extends Component<{}>{
  constructor(props){
    super(props);
    this.state = {
      avatarSource: {uri:'https://i.imgur.com/XlYLI23.jpg'}
    }
  }
  static navigationOptions = () => ({
    header: null,
  })
  chooseImage(){
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  }
  saveInfomation(){
    alert('saved')
  }
  
  
  render(){
    let avatar = this.state.avatarSource;
    return (
      <View style={styles.view_main}>
        <View style={{flex:1/13,flexDirection:"row",justifyContent:'center',backgroundColor:'#f1f8fe'}}>
          <TouchableOpacity onPress={()=>{ Actions.pop()}} style={{flex:1,paddingLeft:10,justifyContent:'center'}} >
            <Icon name="ios-arrow-round-back" size={40} color="red" />
          </TouchableOpacity>
          <View style={{flex:7,justifyContent:'center'}}> 
            <Text> Thành viên Metiz </Text>
            <Text style={{color:'#333',fontSize:10}}> Thông tin cá nhân</Text>
          </View>
          <View style={{flex:2,justifyContent:'center'}}> 
          </View>
        </View>
        <View style={{flex:4/13,flexDirection:'column',alignItems:'center',marginTop:5,backgroundColor:'#fff'}}>
            <View style={{flex:7,padding:10}}>
                <TouchableOpacity onPress={this.chooseImage.bind(this)}>
                  <Image
                    style={{width:100,height:100,borderRadius:50}}
                    source={avatar}
                   />
                </TouchableOpacity>
            </View>
            <View style={{flex:3,padding:10}}>
                <Text>Nguyễn Phúc</Text>
                <Text>0912292829292</Text>
            </View>
        </View>
        <View style={{flex:8/13,flexDirection:'column',backgroundColor:'#e9ebee',justifyContent:'center'}}>
            <View style={{flex:9,backgroundColor:'#eaebee'}}>
                <ScrollView>
                    <View style={stylePayment.title}>
                        <Text>Khuyến mãi của bạn</Text>
                    </View>
                    <View style={{height:viewportHeight*0.15,marginTop:5,backgroundColor:'#fff'}}>
                        <View style={{flex:1,flexDirection:'column'}}>
                            <View style={stylePayment.rowitem}>
                                <View style={stylePayment.itemleft}>
                                    <Text >Điểm Metiz </Text>
                                </View>
                                <View style={stylePayment.itemright}>
                                    <Text >12.000 </Text>
                                </View>
                            </View>
                            <View style={stylePayment.rowitem}>
                                <View style={stylePayment.itemleft}>
                                    <Text >Thẻ Quà Tặng </Text>
                                </View>
                                <View style={stylePayment.itemright}>
                                    <Text > 1</Text>
                                </View>
                                
                            </View>
                        </View>
                    </View>
                    <View style={stylePayment.title}>
                        <Text>Thông tin cá nhân</Text>
                    </View>
                    <View style={{height:viewportHeight*0.2,marginTop:5,backgroundColor:'#fff'}}>
                        <View style={{flex:1,flexDirection:'column'}}>
                            <View style={stylePayment.rowitem}>
                                <View style={stylePayment.itemleft}>
                                    <Text >Thông tin tài khoản </Text>
                                </View>
                                <View style={stylePayment.itemright}>
                                    <Icon name="ios-arrow-forward" size={30} color="#333" />
                                </View>
                                
                            </View>
                            <View style={stylePayment.rowitem}>
                                <View style={stylePayment.itemleft}>
                                    <Text >Đổi mật khẩu </Text>
                                </View>
                                <View style={stylePayment.itemright}>
                                    <Icon name="ios-arrow-forward" size={30} color="#333" />
                                </View>
                                
                            </View>
                            <View style={stylePayment.rowitem}>
                                <View style={stylePayment.itemleft}>
                                    <Text >Thẻ Thành Viên </Text>
                                </View>
                                <View style={stylePayment.itemright}>
                                    <Icon name="ios-arrow-forward" size={30} color="#333" />
                                </View>
                                
                            </View>
                        </View>
                    </View>
                    <View style={stylePayment.title}>
                        <Text>LỊCH SỬ</Text>
                    </View>
                    <View style={{height:viewportHeight*0.14,marginTop:5,backgroundColor:'#fff'}}>
                        <View style={{flex:1,flexDirection:'column'}}>
                            <View style={stylePayment.rowitem}>
                                <View style={stylePayment.itemleft}>
                                    <Text >Lịch sử giao dịch </Text>
                                </View>
                                <View style={stylePayment.itemright}>
                                    <Text >12.000 đ </Text>
                                </View>
                                
                            </View>
                            <View style={stylePayment.rowitem}>
                                <View style={stylePayment.itemleft}>
                                    <Text >Phim đã xem </Text>
                                </View>
                                <View style={stylePayment.itemright}>
                                    <Text > 2 </Text>
                                </View>
                                
                            </View>
                        </View>
                    </View>
                    <View style={stylePayment.title}>
                        <Text>LIÊN KẾT TÀI KHOẢN NGÂN HÀNG</Text>
                    </View>
                    <View style={{height:viewportHeight*0.2,marginTop:5,backgroundColor:'#fff'}}>
                    <View style={{flex:1,flexDirection:'column'}}>
                            <View style={stylePayment.rowitem}>
                                <View style={stylePayment.itemleft}>
                                    <Text >Ví MOMO </Text>
                                </View>
                                <View style={stylePayment.itemright}>
                                    <Text >90.000 đ </Text>
                                </View>
                                
                            </View>
                            <View style={stylePayment.rowitem}>
                                <View style={stylePayment.itemleft}>
                                    <Text >Visa - MasterCard </Text>
                                </View>
                                <View style={stylePayment.itemright}>
                                    <Text > 0 đ</Text>
                                </View>
                                
                            </View>
                            <View style={stylePayment.rowitem}>
                                <View style={stylePayment.itemleft}>
                                    <Text >ATM Nội địa </Text>
                                </View>
                                <View style={stylePayment.itemright}>
                                    <Text > 90.000 đ</Text>
                                </View>
                                
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
      </View>
    );
  }
}

const stylePayment = StyleSheet.create({
    title:{
        height:viewportHeight*0.05,
        marginTop:25,
        paddingLeft:10
    },
    itemleft:{
        flex:6,
        alignItems:'flex-start',
        justifyContent:'center'
    },
    itemright:{
        flex:4,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    rowitem:{
        flex:1,
        flexDirection:'row',
        padding:10,
        borderTopWidth:1,
        borderTopColor:'#e9ebee'
    }
    
})