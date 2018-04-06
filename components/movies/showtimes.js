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
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux'; // New code
import GridView from 'react-native-super-grid';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class ThuHai extends Component{
    render(){
        return (
            <GridView
            itemDimension={viewportWidth/3}
            items={[1,2,3,4,5,6]}
            renderItem={item => (
                <View style={{flex:1,padding:20,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
                    <View >
                         <Text>21:30</Text>   
                    </View>
                    <View style={{paddingTop:10}}>
                         <Text>Phòng Chiếu 03</Text>   
                    </View>
                </View>
            )}
            />
        )
    }
}

const TabShowTimes = TabNavigator({
    'Thứ 2': { screen: ThuHai },
    'Thứ 3': { screen: ThuHai },
    'Thứ 4': { screen: ThuHai },
    'Thứ 5': { screen: ThuHai },
    'Thứ 6': { screen: ThuHai },
    'Thứ 7': { screen: ThuHai },
    'Chủ nhật': { screen: ThuHai },
},
{
  tabBarOptions: {
    scrollEnabled: true,
    activeTintColor: 'black',
    inactiveTintColor:'#333',
    activeTabStyle: {
      color:"#333",
      backgroundColor: '#f5f5f5',
    },
    tabStyle: {
      height: 35, 
    },
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#f5f5f5',
    },
  }
});

class Item extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      isModalVisible: false
    };
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
    const { params } = this.props.navigation.state;
    var str = JSON.stringify(this.state.data.videos);
    var trailer_url = String(str).substr(87, 11);
    console.log(trailer_url)
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
          {/* View  */}
        <TabShowTimes/>
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