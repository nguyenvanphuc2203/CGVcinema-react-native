import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';

export default class ControlPanel extends Component{
  async logout(){
    try {
      await AsyncStorage.removeItem('@LoginMetiz:key');
      console.log('Logout !');
      alert('logout thành công!');
      this.props.navigation.navigate('Login')
    } catch (error) {
      console.log(error);
    }
  }
  login(){
    this.props.navigation.navigate('Login')
  }
  render(){
    return (
      <View style={styles.control_main}>
        <View style={styles.control_profile}>
        <View style={{flex:2/3,flexDirection:"row",justifyContent:'center',alignItems:'center'}}>
          <View style={{paddingRight:30}}>
            <Image
              style={{width:30,height:30}}
              source={{uri:'https://i.imgur.com/vjb4kmB.png'}}
             />
          </View>
          <View style={{}}>
            <Image
             style={{width:80,height:80,borderRadius:40}}
             source={{uri:'https://i.imgur.com/nfYFK52.png'}}
             />
          </View>
          <View style={{paddingLeft:30}}>
          <Image
            style={{width:30,height:30}}
            source={{uri:'https://i.imgur.com/layk8nR.png'}}
           />
          </View>
        </View>
        <View style={{flex:1/3}}>
          <Button color="black" onPress={this.login.bind(this)} title="Đăng Nhập Thành Viên"/>
        </View>
        </View>
        <View style={styles.control_menu_item}>
          <Text style={{color:'#fff'}}>Trang chủ</Text>
        </View>
        <View style={{flex:2/10,flexDirection:"row"}}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black',margin:2}}>
            <Image style={{width:40,height:40,marginBottom:3}} source={require('../images/home_white.png')} />
            <Text style={{color:'#fff'}}>Trang chủ</Text>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black',margin:2}}>
            <Image style={{width:40,height:40,marginBottom:3}} source={require('../images/movies_white.png')} />
            <Text style={{color:'#fff'}}>Phim mới</Text>
          </View>
        </View>
        <View style={{flex:2/10,flexDirection:"row"}}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black',margin:2}}>
            <Image style={{width:40,height:40,marginBottom:3}} source={require('../images/icon_member.png')} />
            <Text style={{color:'#fff'}}>Thẻ thành viên</Text>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black',margin:2}}>
            <Image style={{width:40,height:40,marginBottom:3}} source={require('../images/icon_gift.png')} />
            <Text style={{color:'#fff'}}>Ưu đãi và quà tặng</Text>
          </View>
        </View>
        <View style={{flex:2/10,flexDirection:"row"}}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black',margin:2}}>
            <Image style={{width:40,height:40,marginBottom:3}} source={require('../images/icon_cinema.png')} />
            <Text style={{color:'#fff'}}>Rạp metiz</Text>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black',margin:2}}>
            <Image style={{width:40,height:40,marginBottom:3}} source={require('../images/icon_info.png')} />
            <Text style={{color:'#fff'}}>Help</Text>
          </View>
        </View>

      </View>
    )
  }
}
