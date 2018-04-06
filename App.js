import React, { Component } from 'react';
import { Provider,connect } from 'react-redux';
import store from './components/store/store';
import { Router, Scene } from 'react-native-router-flux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import BookHistory from './components/transaction/history';
import Login from './components/login/login';
import Wellcome from './components/wellcome/wellcome';
import Notification from './components/notification/mainviewNoti';
import NotificationDetail from './components/notification/detail';
import Promotion from './components/promotion/mainviewPromotion';
import PromotionDetail from './components/promotion/detail';
import Home from './components/home/mainview';
import DetailFilm from './components/movies/item';
export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store} >
         <Router>
          <Scene key="root">
            <Scene key="Wellcome"
              component={Wellcome}
              title="Wellcome"
              initial
            />
            <Scene key="Login"
              component={Login}
              title="Login"
              initial
            />
            <Scene key="DetailFilm"
              component={DetailFilm}
              title="DetailFilm"
              initial
            />
            <Scene key="Promotion"
              component={Promotion}
              title="Promotion"
              initial
            />
             <Scene key="PromotionDetail"
              component={PromotionDetail}
              title="PromotionDetail"
              initial
            />
            <Scene key="Notification"
              component={Notification}
              title="Notification"
              initial
            />
            <Scene key="NotificationDetail"
              component={NotificationDetail}
              title="NotificationDetail"
              initial
            />
            <Scene key="Home"
              component={Home}
              title="Home"
              initial
            />
            <Scene
              key="BookHistory"
              component={BookHistory}
              title="Gray"
            />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
