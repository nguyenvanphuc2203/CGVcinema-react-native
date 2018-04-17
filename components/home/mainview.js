import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux'; // New code
import styles from '../stylesheets';
import ControlPanel from '../menu/controlpanel';
import Home from './home';
import {
  View,
  Text,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  BackHandler,
  Alert,
  StyleSheet
} from 'react-native';


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
/* get width, height */
export default class Drawermenu extends Component{
  constructor(props){
    super(props);
    BackHandler.addEventListener('hardwareBackPress', function() {
        // handle back button to exit app
        Alert.alert(
          'Thoát ứng dụng',
          'Bạn có muốn thoát không?', [{
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel'
          }, {
              text: 'OK',
              onPress: () => BackHandler.exitApp()
          }, ], {
              cancelable: false
          }
      )
      return true;
    })
  }
  static navigationOptions = ({navigation}) => ({
    header:null
  })
  closeControlPanel = () => {
    // close drawer menu
    this._drawer.close()
  };
  openControlPanel = () => {
    // open drawer menu
    this._drawer.open()
  };
  render(){
    return (
      <Drawer
        type="overlay"
        side="right"  
        tapToClose={true}
        openDrawerOffset={0.2}
        ref={(ref) => this._drawer = ref}
        content={<ControlPanel />}
        >
          <View style={styles.view_main}>
            <View style={styles.head_view}>
              <TouchableOpacity onPress={()=>{ Actions.Profile() }} style={style.profile} >
                <Image
                  style={style.profile_image}
                  source={{uri:'https://i.imgur.com/ik7IrFf.jpg'}}
                />
              </TouchableOpacity>
              <TouchableOpacity  onPress={ ()=>{Actions.Notification()}  } style={style.notification}>
                <Text style={{color:'#fff'}}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.menuIcon} onPress={this.openControlPanel}>
                <Image
                  style={style.menuImage}
                  source={require('../images/menu_icon.png')}
                />
              </TouchableOpacity>
            </View>
              <Home/>
          </View>
      </Drawer>
    );
  }
}

const style = StyleSheet.create({
  profile:{
    flex:7,
    justifyContent:'center',
    alignItems:'flex-start',
    paddingLeft:10
  },
  profile_image:{
    width:viewportWidth/12,
    height:viewportWidth/12,
    borderRadius:viewportWidth/24
  },
  notification:{
    flex:1,justifyContent:'center',
    alignItems:'center',
    borderColor:'#fff',
    borderRadius:20,
    borderWidth:2
  },
  menuIcon:{
    flex:2,
    alignItems:'center'
  },
  menuImage:{
    width:viewportWidth/12,
    height:viewportWidth/12
  }
})