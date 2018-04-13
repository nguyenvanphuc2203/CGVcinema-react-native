import React, { Component } from 'react';
import Toast from 'react-native-simple-toast';
import Modal from "react-native-modal";
import styles from '../stylesheets';
import Drawer from 'react-native-drawer';
import ControlPanel from '../menu/controlpanel';
import { connect } from 'react-redux';
import { TabNavigator } from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  Image,
  ImageBackground,
  TouchableOpacity,
  WebView,
  ScrollView,
  Dimensions,
  RefreshControl,
  FlatList,
  Picker
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux'; // New code
import GridView from 'react-native-super-grid';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const TITLE_FILM = 'Phòng Chiếu 03';
const ONE_DAY_IN_MILISECOND = (24 * 60 * 60 * 1000);
var date = new Date();
var days = [
  'Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy',
  'Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
var current_day = days[date.getDay()];
var current_date = date.getDate() + ' - ' + (date.getMonth()+1) + ' - ' + date.getFullYear()
var nextday1 = new Date(date.getTime() + (ONE_DAY_IN_MILISECOND));
var nextday1_date = nextday1.getDate() + ' - ' + (nextday1.getMonth()+1) + ' - ' + nextday1.getFullYear()
var nextday2 = new Date(date.getTime() + (2*ONE_DAY_IN_MILISECOND));
var nextday2_date = nextday2.getDate() + ' - ' + (nextday2.getMonth()+1) + ' - ' + nextday2.getFullYear()
var nextday3 = new Date(date.getTime() + (3*ONE_DAY_IN_MILISECOND));
var nextday3_date = nextday3.getDate() + ' - ' + (nextday3.getMonth()+1) + ' - ' + nextday3.getFullYear()
var nextday4 = new Date(date.getTime() + (4*ONE_DAY_IN_MILISECOND));
var nextday4_date = nextday4.getDate() + ' - ' + (nextday4.getMonth()+1) + ' - ' + nextday4.getFullYear()
var nextday5 = new Date(date.getTime() + (5*ONE_DAY_IN_MILISECOND));
var nextday5_date = nextday5.getDate() + ' - ' + (nextday5.getMonth()+1) + ' - ' + nextday5.getFullYear()
var nextday6 = new Date(date.getTime() + (6*ONE_DAY_IN_MILISECOND));
var nextday6_date = nextday6.getDate() + ' - ' + (nextday6.getMonth()+1) + ' - ' + nextday6.getFullYear()

class TimesRooms extends Component{
    constructor(props){
      super(props);
      console.log(this.props)
      this.state = {
        xuatchieu : [
          {time:"17:30",room:"03"},
          {time:"18:30",room:"01"},
          {time:"20:00",room:"02"},
          {time:"21:30",room:"03"},
          {time:"22:00",room:"04"},
          {time:"22:30",room:"03"},
          {time:"23:30",room:"01"}
        ]
      }
    }
    render(){
        return (
          <View style={{flex:1,flexDirection:'column'}}>
          <View style={{flex:9}}>
            <GridView
              itemDimension={viewportWidth/3}
              items={this.state.xuatchieu}
              renderItem={item => (
                  <TouchableOpacity onPress={ ()=>{ Actions.Booking({title:TITLE_FILM,time:item.time,room:item.room})} }
                    style={{flex:1,padding:15,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
                      <View >
                          <Text>{item.time}</Text>   
                      </View>
                      <View style={{paddingTop:10}}>
                          <Text>Phòng Chiếu {item.room}</Text>   
                      </View>
                  </TouchableOpacity>
              )}
            />
          </View>
          <View style={{flex:1,marginTop:6,backgroundColor:'#333'}}>
            <View style={{flex:1,flexDirection:'row'}}>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#fff'}}>{this.props.day} </Text>
                <Text style={{color:'#fff'}}>{this.props.date}</Text>
              </View>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#fff'}}>{this.state.xuatchieu.length} </Text>
                <Text style={{color:'#fff'}}>Suất chiếu</Text>
              </View>
            </View>
          </View>
        </View>
        )
    }
}

const TabShowTimes = TabNavigator({
    'Tab 1': { screen: props => <TimesRooms date={current_date} day={days[date.getDay()]+' (Hôm nay)'} />,
      navigationOptions:{
        title: days[date.getDay()]
      } 
    },
    'Tab 2': { screen: props => <TimesRooms date={nextday1_date} day={days[date.getDay()+1]} />,
      navigationOptions:{
        title: days[date.getDay()+1]
      } 
     },
    'Tab 3': { screen: props => <TimesRooms date={nextday2_date} day={days[date.getDay()+2]} />,
      navigationOptions:{
        title: days[date.getDay()+2]
      } 
     },
    'Tab 4': { screen: props => <TimesRooms date={nextday3_date} day={days[date.getDay()+3]} />,
      navigationOptions:{
       title: days[date.getDay()+3]
      } 
    },
    'Tab 5': { screen: props => <TimesRooms date={nextday4_date} day={days[date.getDay()+4]} />,
      navigationOptions:{
        title: days[date.getDay()+4]
      } 
     },
    'Tab 6': { screen: props => <TimesRooms date={nextday5_date} day={days[date.getDay()+5]} />,
      navigationOptions:{
        title: days[date.getDay()+5]
      } 
     },
    'Tab 7': { screen: props => <TimesRooms date={nextday6_date} day={days[date.getDay()+6]} />,
      navigationOptions:{
        title: days[date.getDay()+6]
      }  },
},
{
  tabBarOptions: {
    scrollEnabled: true,
    activeTintColor: '#e9ebee',
    inactiveTintColor:'#fff',
    activeTabStyle: {
      backgroundColor: 'red',
    },
    tabStyle: {
      backgroundColor: 'black',
      height: 40, 
    },
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 'red',
    },
  }
});

class Item extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      isModalVisible: false,
      filmtype:''
    };
    TITLE_FILM = this.props.navigation.state.params.title;
  }
  static navigationOptions = ({navigation}) => ({
    header: null,
  })
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render() {
    return (
      <Drawer
        type="overlay"
        side="right"  
        tapToClose={true}
        openDrawerOffset={0.2}
        ref={(ref) => this._drawer = ref}
        content={ <ControlPanel /> }
        >
         
        <View style={styles.view_main}>
         <View style={{flex:1/13}}>
            <View style={{flex:1,flexDirection:"row",justifyContent:'center',backgroundColor:'#fff'}}>
              <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{flex:1,paddingLeft:10,justifyContent:'center'}} >
                <Icon name="ios-arrow-round-back" size={40} color="red" />
              </TouchableOpacity>
              <View style={{flex:7,justifyContent:'center'}}> 
                <Text> {this.props.navigation.state.params.title} </Text>
              </View>
              <TouchableOpacity style={{flex:1,justifyContent:'center'}} onPress={this.openControlPanel}>
                <Icon name="ios-menu" size={40} color="red" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex:1/13,marginTop:6}}>
                <View style={{flex:1,flexDirection:'row',padding:5,backgroundColor:'#fff'}}>
                  <View style={{flex:7,alignItems:'flex-start',justifyContent:'center'}}>
                    <Text> Định Dạng Phim</Text>
                  </View>
                  <View style={{flex:3,alignItems:'flex-end',padding:2,justifyContent:'center'}}>
                    <Picker
                      selectedValue={this.state.filmtype}
                      style={{ height: 20, width: 150 }}
                      onValueChange={(itemValue, itemIndex) => this.setState({filmtype: itemValue})}>
                      <Picker.Item label="Phim 2D" value="2D" />
                      <Picker.Item label="Phim 3D" value="3D" />
                      <Picker.Item label="Phim 3DX" value="3DX" />
                      <Picker.Item label="Phim 4D" value="4D" />
                    </Picker>
                  </View>
                </View>
              </View>
          {/* View  */}
          <View style={{flex:11/13}}>
            <TabShowTimes/>
          </View>
        </View>
    </Drawer>
        
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nav:state.nav
  }
}

export default connect(mapStateToProps)(Item)