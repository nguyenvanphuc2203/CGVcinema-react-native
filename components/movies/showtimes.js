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
import * as Animatable from 'react-native-animatable';


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const TITLE_FILM = 'Phòng Chiếu 03';
const ONE_DAY_IN_MILISECOND = (24 * 60 * 60 * 1000);
const DATE = new Date();
const DAYS = [
  'Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'
];

/*
  get next date and format yyyy - mm - dd 
*/
const getNextDateFormat = (number_next_date) => {
  var next_date = new Date(DATE.getTime() + (number_next_date*ONE_DAY_IN_MILISECOND));
  return next_date.getDate() + ' - ' + (next_date.getMonth()+1) + ' - ' + next_date.getFullYear()
}
/*
  get next day and format Thứ hai, ba ... 
*/
const getNextDay = (number_next_day) => {
  var next_date = new Date(DATE.getTime() + (number_next_day*ONE_DAY_IN_MILISECOND));
  var next_day = next_date.getDay();
  return DAYS[next_day];
}

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
                  <TouchableOpacity 
                    onPress={ ()=>{ Actions.Booking({title:TITLE_FILM,time:item.time,room:item.room})} }
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
    'Tab 1': { screen: props => <TimesRooms date={getNextDateFormat(0)} day={getNextDay(0)+' (Hôm nay)'} />,
      navigationOptions:{
        title: getNextDay(0)
      } 
    },
    'Tab 2': { screen: props => <TimesRooms date={getNextDateFormat(1)} day={getNextDay(1)} />,
      navigationOptions:{
        title: getNextDay(1)
      } 
     },
    'Tab 3': { screen: props => <TimesRooms date={getNextDateFormat(2)} day={getNextDay(2)} />,
      navigationOptions:{
        title: getNextDay(2)
      } 
     },
    'Tab 4': { screen: props => <TimesRooms date={getNextDateFormat(3)} day={getNextDay(3)} />,
      navigationOptions:{
       title: getNextDay(3)
      } 
    },
    'Tab 5': { screen: props => <TimesRooms date={getNextDateFormat(4)} day={getNextDay(4)} />,
      navigationOptions:{
        title: getNextDay(4)
      } 
     },
    'Tab 6': { screen: props => <TimesRooms date={getNextDateFormat(5)} day={getNextDay(5)} />,
      navigationOptions:{
        title: getNextDay(5)
      } 
     },
    'Tab 7': { screen: props => <TimesRooms date={getNextDateFormat(6)} day={getNextDay(6)} />,
      navigationOptions:{
        title: getNextDay(6)
      }  
    },
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

class ShowTimes extends Component {
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

export default connect(mapStateToProps)(ShowTimes)