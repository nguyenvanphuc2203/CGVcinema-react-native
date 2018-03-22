import React,{ Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import Profile from '../profile/profile';
import Movies from '../movies/movies';
import { NotificationRoute } from '../notification/notificationRoute';
import { MoviesRoute } from '../movies/moviesRoute';
import Drawermenu from '../drawerMenu/mainview';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  BackHandler,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const myIcon = (<Icon name="iOS-Outline" size={30} color="#900" />)

export default class Tabbar extends Component<{}>{
  constructor(props){
    super(props);
    this.state = {
      selectedTab:'cinema',
      numberMessage:4
    };
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
  componentWillUnmount(){
      BackHandler.removeEventListener('hardwareBackPress', () => {
        alert('hello back')
      });
  }
  static navigationOptions = () => ({
    header: null
  })
  render(){
    return (
      <TabNavigator
        tabBarStyle={{backgroundColor:'#141417'}}
        >
        <TabNavigator.Item
          selected={this.state.selectedTab === 'cinema'}
          renderIcon={() => <Icon name="ios-home-outline" size={30} color="#fff" />}
          renderSelectedIcon={() => <Icon name="ios-home" size={30} color="#fff" />}
          onPress={() => this.setState({ selectedTab: 'cinema' })}>
          <Drawermenu navigation={this.props.navigation}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Movies'}
          renderIcon={() => <Icon name="ios-videocam-outline" size={30} color="#fff" />}
          renderSelectedIcon={() => <Icon name="ios-videocam" size={30} color="#fff" />}
          onPress={() => this.setState({ selectedTab: 'Movies',numberMessage:0 })}>
          <MoviesRoute/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Notification'}
          badgeText={this.state.numberMessage}
          renderIcon={() => <Icon name="ios-notifications-outline" size={30} color="#fff" />}
          renderSelectedIcon={() => <Icon name="ios-notifications" size={30} color="#fff" />}
          onPress={() => this.setState({ selectedTab: 'Notification',numberMessage:0 })}>
          <NotificationRoute />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          renderIcon={() => <Icon name="ios-contact-outline" size={30} color="#fff" />}
          renderSelectedIcon={() => <Icon name="ios-contact" size={30} color="#fff" />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <Profile/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}
