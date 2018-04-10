import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableHighlight,
  AsyncStorage,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'; // New code

class ControlPanel extends Component{
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
          console.log('login thành công Metiz! '+value);
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
      let { dispatch } = this.props;
      dispatch({type:'HOME'})
    } catch (error) {
      console.log(error);
    }
  }
  login(){
    let { dispatch } = this.props;
    Actions.Login()
  }
  render(){
    let { dispatch } = this.props;
    
    return (
      <View style={styles.control_main}> 
        <ImageBackground style={{width:'100%',height:'100%'}} source={{uri:'https://i.imgur.com/rsulzFN.png'}}>
        <View style={styles.control_profile}>
        <View style={{flex:2/3,flexDirection:"row",justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity onPress={()=>{ Actions.Notification() }} style={{paddingRight:30}}>
            <Image
              style={{width:25,height:25}}
              source={{uri:'https://i.imgur.com/vjb4kmB.png'}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{ Actions.Profile() }} style={{}}>
            <Image
             style={{width:60,height:60,borderRadius:30}}
             source={this.state.avatar}
             />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{ Actions.Profile() }} style={{paddingLeft:30}}>
          <Image
            style={{width:25,height:25}}
            source={{uri:'https://i.imgur.com/layk8nR.png'}}
           />
          </TouchableOpacity>
        </View>
        <View style={{flex:1/3}}>
          <Button color="black" onPress={this.state.isLogin ? this.logout.bind(this) : this.login.bind(this)} title={this.state.buttonValue}/>
        </View>
        </View>

        <View style={{backgroundColor:'#fff',padding:10,flex:1/10,flexDirection:"row"}}>
          <Image
            style={{width:'100%',height:'100%'}}
            source={{uri:'https://i.imgur.com/nk0tvOL.png'}}
          />
        </View>
        <View style={{flex:7/10,flexDirection:"column"}}>
          <View style={{flex:1.5/10,flexDirection:"row",borderBottomWidth:0.4,borderBottomColor:'#f5f5f5',padding:5}}>
            <TouchableOpacity onPress={()=>{ Actions.BookHistory()}} style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
              <Text style={{color:'#f5f5f5'}}>Tổng chi tiêu 2018</Text>
              <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>120.000 đ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{ Actions.BookHistory() }} style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
              <Text style={{color:'#f5f5f5'}}>Điểm Thưởng</Text>
              <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>50</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:1/10,flexDirection:"row",borderBottomWidth:0.4,borderBottomColor:'#f5f5f5'}}>
            <TouchableOpacity onPress={()=>{ Actions.Home() }} style={{flex:1,justifyContent:'center',alignItems:'center',padding:2}}>
              <Text style={{color:'#fff'}}>Đặt vé theo phim</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:1/10,flexDirection:"row",borderBottomWidth:0.4,borderBottomColor:'#f5f5f5'}}>
            <TouchableOpacity onPress={()=>{ Actions.Home() }} style={{flex:1,justifyContent:'center',alignItems:'center',padding:2}}>
              <Text style={{color:'#fff'}}>Đặt vé theo rạp</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:3/10,flexDirection:"column",borderBottomWidth:0.4,borderBottomColor:'#f5f5f5'}}>
            <View style={{flex:1,flexDirection:"row"}}>
              <TouchableOpacity onPress={()=>{ Actions.Home() }} style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',padding:2}}>
                <Icon name="ios-home-outline" size={25} color="#fff" />
                <Text style={{color:'#fff',fontSize:11}}>Trang Chủ</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{ Actions.Home() }} style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',padding:2}}>
                <Icon name="ios-contact-outline" size={25} color="#fff" />
                <Text style={{color:'#fff',fontSize:11}}>Thành Viên</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{ Actions.Home() }} style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',padding:2}}>
                <Icon name="ios-videocam-outline" size={25} color="#fff" />
                <Text style={{color:'#fff',fontSize:11}}>Rạp Metiz</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex:1,flexDirection:"row"}}>
              <TouchableOpacity onPress={()=>{ Actions.Home() }} style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',padding:2}}>
                <Icon name="ios-star-outline" size={25} color="#fff" />
                <Text style={{color:'#fff',fontSize:11}}>Đặc Trưng Metiz</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{ Actions.Promotion() }} style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',padding:2}}>
                <Icon name="ios-notifications-outline" size={25} color="#fff" />
                <Text style={{color:'#fff',fontSize:11}}>Tin Mới & Ưu Đãi</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{ Actions.Home() }} style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',padding:2}}>
                <Icon name="ios-images-outline" size={25} color="#fff" />
                <Text style={{color:'#fff',fontSize:11}}>Photo Ticket</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex:1/10,borderBottomWidth:0.4,borderBottomColor:'#f5f5f5'}}>
            <TouchableOpacity onPress={()=>{ dispatch({type:'LOGIN'}) }} style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:'#fff'}}>Đăng Xuất</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={{flex:2/10,flexDirection:"row"}}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black',margin:2}}>
            <Image style={{width:30,height:30,marginBottom:3}} source={require('../images/icon_member.png')} />
            <Text style={{color:'#fff'}}>Thẻ thành viên</Text>
          </View>
          <TouchableOpacity onPress={()=>{console.log(this.props);this.props.navigation.navigate('Notification')}} style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black',margin:2}}>
            <Image style={{width:30,height:30,marginBottom:3}} source={require('../images/icon_gift.png')} />
            <Text style={{color:'#fff'}}>Ưu đãi và quà tặng</Text>
          </TouchableOpacity>
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
        </View> */}
        </ImageBackground>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.nav
  }
}

export default connect(mapStateToProps)(ControlPanel)