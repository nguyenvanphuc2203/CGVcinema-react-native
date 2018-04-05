import React, { Component } from 'react';
import styles from '../stylesheets';
import Drawer from 'react-native-drawer';
import ControlPanel from '../menu/controlpanel';
import Swiper from 'react-native-swiper';
import  MainRoute from './notification';
import {
  View,
  Text,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
/* get width, height */
export default class Movies extends Component{
  constructor(props){
    super(props);
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
            <View style={{flex:1/13,flexDirection:"row",justifyContent:'center',backgroundColor:'#fff'}}>
              <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{flex:1,paddingLeft:10}} >
                <Icon name="ios-arrow-round-back" size={40} color="red" />
              </TouchableOpacity>
              <View style={{flex:7,justifyContent:'center'}}> 
                <Text>Tin Mới & Ưu Đãi</Text>
              </View>
              <TouchableOpacity style={{flex:1}} onPress={this.openControlPanel}>
                <Icon name="ios-menu" size={40} color="red" />
              </TouchableOpacity>
            </View>
            <View style={{flex:1/13,marginTop:6}}>
                <View style={{flex:1,flexDirection:'row',padding:5,backgroundColor:'#fff'}}>
                  <View style={{flex:4}}>
                    <Text style={{fontWeight:'bold'}}> Chọn Rạp</Text>
                  </View>
                  <View style={{flex:5}}></View>
                  <View style={{flex:2,padding:2}}>
                    <Text style={{fontWeight:'bold'}}> Tất cả >></Text>
                  </View>
                </View>
              </View>
              <MainRoute/>
          </View>
      </Drawer>
    );
  }
}
