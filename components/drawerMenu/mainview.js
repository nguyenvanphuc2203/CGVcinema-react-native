import React, { Component } from 'react';
import styles from '../stylesheets';
import Drawer from 'react-native-drawer';
import ControlPanel from './controlpanel';
import Swiper from 'react-native-swiper';
import { MainRoute } from './mainRoute';
import {
  View,
  Text,
  Button,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

export default class Drawermenu extends Component{
  constructor(props){
    super(props);
  }
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render(){
    return (
      <Drawer
        tapToClose={true}
        openDrawerOffset={0.3}
        ref={(ref) => this._drawer = ref}
        content={<ControlPanel navigation={this.props.navigation}/>}
        >
          <View style={styles.view_main}>
            <View style={styles.head_view}>
              <TouchableOpacity onPress={this.openControlPanel}>
                <Image
                style={{width:30,height:30,marginLeft:10}}
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
