import React, { Component } from 'react';
import styles from '../stylesheets';
import Drawer from 'react-native-drawer';
import ControlPanel from '../menu/controlpanel';
import Swiper from 'react-native-swiper';
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
  Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code


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
    this._drawer.close()
  };
  openControlPanel = () => {
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
              <TouchableOpacity onPress={()=>{ Actions.Profile() }} style={{flex:7,justifyContent:'center',alignItems:'flex-start',paddingLeft:10}} >
                <Image
                  style={{width:viewportWidth/12,height:viewportWidth/12,borderRadius:viewportWidth/24}}
                  source={{uri:'https://i.imgur.com/ik7IrFf.jpg'}}
                />
              </TouchableOpacity>
              <TouchableOpacity  onPress={ ()=>{Actions.Notification()}  } style={{flex:1,justifyContent:'center',alignItems:'center',borderColor:'#fff',borderRadius:20,borderWidth:2}}>
                <Text style={{color:'#fff'}}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:2,alignItems:'center'}} onPress={this.openControlPanel}>
                <Image
                  style={{width:viewportWidth/12,height:viewportWidth/12}}
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
