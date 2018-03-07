import React, { Component } from 'react';
import styles from '../stylesheets';
import Drawer from 'react-native-drawer';
import ControlPanel from './controlpanel';
import Swiper from 'react-native-swiper';
import {
  View,
  Text,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  ScrollView
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Movies from './tab-film';
import Carousel from 'react-native-snap-carousel';


export default class Homeview extends Component{
  constructor(props){
    super(props);
  }
  static navigationOptions = () => ({
      header:null
  })
  render(){
    return (
          <View style={styles.content_view}>
            {/* <!-- image slider --> */}
              <View style={styles.slider_swiper}>
                <Swiper
                  loadMinimal={true}
                  loadMinimalSize={2}
                  loadMinimalLoader={<ActivityIndicator size="large" color="#00ff00" />}
                  style={styles.wrapper}
                  autoplay={true}
                  showsButtons={true}>
                  <View style={styles.slide1}>
                    <Image
                    style={styles.image_swiper}
                    source={require('../images/banner_film1.jpg')}
                    />
                  </View>
                  <View style={styles.slide2}>
                    <Image
                    style={styles.image_swiper}
                    source={require('../images/banner_film2.jpg')}
                    />
                  </View>
                  <View style={styles.slide3}>
                    <Image
                    style={styles.image_swiper}
                    source={require('../images/banner_film3.jpg')}
                    />
                  </View>
                </Swiper>
              </View>
              {/* <!-- Tab Movies --> */}
              <View style={{flex:3/4}}>
                <Movies screenProps={{ navigation: this.props.navigation }}/>
              </View>

        </View>
    );
  }
}
