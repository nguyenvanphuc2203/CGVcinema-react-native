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
  BackHandler
} from 'react-native';

export default class Tabbar extends Component<{}>{
  constructor(props){
    super(props);
    this.state = {
      selectedTab:'cinema',
      numberMessage:4
    };
    BackHandler.addEventListener('hardwareBackPress', function() {
        alert('hello back');
        return false;
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
          renderIcon={() => <Image style={{width:26,height:26}} source={require('../images/home_white.png')} />}
          renderSelectedIcon={() => <Image style={{width:26,height:26}} source={require('../images/home_green.png')} />}
          onPress={() => this.setState({ selectedTab: 'cinema' })}>
          <Drawermenu navigation={this.props.navigation}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Movies'}
          renderIcon={() => <Image style={{width:26,height:26}} source={require('../images/movies_white.png')} />}
          renderSelectedIcon={() => <Image style={{width:26,height:26}} source={require('../images/movies_green.png')} />}
          onPress={() => this.setState({ selectedTab: 'Movies',numberMessage:0 })}>
          <MoviesRoute/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Notification'}
          badgeText={this.state.numberMessage}
          renderIcon={() => <Image  source={require('../images/noti_white.png')} />}
          renderSelectedIcon={() => <Image  source={require('../images/noti_green.png')} />}
          onPress={() => this.setState({ selectedTab: 'Notification',numberMessage:0 })}>
          <NotificationRoute />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          renderIcon={() => <Image source={require('../images/profile_white.png')} />}
          renderSelectedIcon={() => <Image source={require('../images/profile_green.png')} />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <Profile/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}
