import React, { Component } from 'react';
import styles from '../stylesheets';
import Drawer from 'react-native-drawer';
import ControlPanel from '../menu/controlpanel';
import Swiper from 'react-native-swiper';
import { MainRoute } from './mainRoute';
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
              <TouchableOpacity style={{flex:2,paddingLeft:10}} >
                <Image
                  style={{width:30,height:30,borderRadius:40}}
                  source={{uri:'https://i.imgur.com/ik7IrFf.jpg'}}
                />
              </TouchableOpacity>
              <View style={{flex:5}}></View>
              <View style={{flex:1,justifyContent:'center',alignItems:'center',borderColor:'#fff',borderRadius:20,borderWidth:2}}>
                <Text style={{color:'#fff'}}>1</Text>
              </View>
              <TouchableOpacity style={{flex:2}} onPress={this.openControlPanel}>
                <Image
                  style={{width:30,height:30,marginLeft:20}}
                  source={require('../images/menu_icon.png')}
                />
              </TouchableOpacity>
            </View>
              <MainRoute/>
          </View>
      </Drawer>
    );
  }
}
