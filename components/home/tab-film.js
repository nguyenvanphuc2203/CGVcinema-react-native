import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Button,
  Alert,
  Dimensions
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { TabNavigator } from 'react-navigation';
import Showing from './tabfilm/showing';
import Special from './tabfilm/special';
import Comming from './tabfilm/comming';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
/* get width, height */

export default TabNavigator({
    'Đang Chiếu': { screen:Showing},
    'Đặc Biệt': { screen:Special },
    'Sắp Chiếu': { screen: Comming},
},
{
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor:'#333',
    activeTabStyle: {
      color:"#333",
      backgroundColor: '#f5f5f5',
    },
    tabStyle: {
      height: viewportHeight/21, 
    },
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#f5f5f5',
    },
  }
});
