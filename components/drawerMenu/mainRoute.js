import React from 'react';
import { StackNavigator } from 'react-navigation';
import Homeview from './home';
import Item from '../movies/item';
import Booking from '../booking/booking';
import BannerDetail from '../notification/detail';

export const MainRoute = StackNavigator({
  Home: { screen: Homeview },
  Item: { screen: Item },
  Booking : { screen: Booking },
  BannerDetail :{ screen : BannerDetail }

});
