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
  Image
} from 'react-native';

export default class Tabbar extends Component<{}>{
  constructor(props){
    super(props);
    this.state = {
      selectedTab:'cinema',
      numberMessage:4
    }
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
          title="cinema"
          renderIcon={() => <Image style={{width:26,height:26}} source={require('../images/home_black.png')} />}
          renderSelectedIcon={() => <Image style={{width:26,height:26}} source={require('../images/home_green.png')} />}
          onPress={() => this.setState({ selectedTab: 'cinema' })}>
          <Drawermenu navigation={this.props.navigation}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Movies'}
          title="Movies"
          renderIcon={() => <Image style={{width:26,height:26}} source={require('../images/movies_black.png')} />}
          renderSelectedIcon={() => <Image style={{width:26,height:26}} source={require('../images/movies_white.png')} />}
          onPress={() => this.setState({ selectedTab: 'Movies',numberMessage:0 })}>
          <MoviesRoute/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Notification'}
          title="Notification"
          badgeText={this.state.numberMessage}
          renderIcon={() => <Image  source={require('../images/noti_black.png')} />}
          renderSelectedIcon={() => <Image  source={require('../images/noti_green.png')} />}
          onPress={() => this.setState({ selectedTab: 'Notification',numberMessage:0 })}>
          <NotificationRoute />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          renderIcon={() => <Image source={require('../images/profile_black.png')} />}
          renderSelectedIcon={() => <Image source={require('../images/profile_green.png')} />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <Profile/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}
