import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableHighlight,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';

export default class ControlPanel extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLogin: false,
      buttonValue : 'Đăng Nhập Thành Viên',
      avatar : {uri:'https://i.imgur.com/ik7IrFf.jpg'}
    }
  }
  async componentWillMount(){
    //check login
    try {
      const value = await AsyncStorage.getItem('@LoginMetiz:key');
        if (value !== null){
          console.log('Check login thành công Metiz! '+value);
          this.setState({isLogin:true,buttonValue: 'Đăng Xuất',avatar:{uri:'https://i.imgur.com/yumgUsX.jpg'}});
        }
      } catch (error) {
        console.log(error);
      }
  }
  async logout(){
    try {
      await AsyncStorage.removeItem('@LoginMetiz:key');
      console.log('Logout !');
      alert('logout thành công!');
      this.props.navigation.navigate('Tabbar')
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
             source={this.state.avatar}
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
          <Button color="black" onPress={this.state.isLogin ? this.logout.bind(this) : this.login.bind(this)} title={this.state.buttonValue}/>
        </View>
        </View>

          <View style={{backgroundColor:'#3d5898',flex:1/10,flexDirection:"row"}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:'#fff'}}>Điểm Tích Lũy</Text>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <TouchableOpacity onPress={()=>{alert('Điểm thưởng để đổi quà ^^')}}>
                <Text style={{color:'yellow',fontSize:20}}>202.000 Xu</Text>
              </TouchableOpacity>
            </View>
          </View>
        <View style={{flex:2/10,flexDirection:"row"}}>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Tabbar')}} style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black',margin:2}}>
            <Image style={{width:30,height:30,marginBottom:3}} source={require('../images/home_white.png')} />
            <Text style={{color:'#fff'}}>Trang chủ</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BookHistory')}} style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black',margin:2}}>
            <Image style={{width:30,height:30,marginBottom:3}} source={require('../images/movies_white.png')} />
            <Text style={{color:'#fff'}}>Lịch Sử</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:2/10,flexDirection:"row"}}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black',margin:2}}>
            <Image style={{width:30,height:30,marginBottom:3}} source={require('../images/icon_member.png')} />
            <Text style={{color:'#fff'}}>Thẻ thành viên</Text>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black',margin:2}}>
            <Image style={{width:30,height:30,marginBottom:3}} source={require('../images/icon_gift.png')} />
            <Text style={{color:'#fff'}}>Ưu đãi và quà tặng</Text>
          </View>
        </View>
        <View style={{flex:2/10,flexDirection:"row"}}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black',margin:2}}>
            <Image style={{width:30,height:30,marginBottom:3}} source={require('../images/icon_cinema.png')} />
            <Text style={{color:'#fff'}}>Rạp metiz</Text>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black',margin:2}}>
            <Image style={{width:30,height:30,marginBottom:3}} source={require('../images/icon_info.png')} />
            <Text style={{color:'#fff'}}>Help</Text>
          </View>
        </View>
      </View>
    )
  }
}
