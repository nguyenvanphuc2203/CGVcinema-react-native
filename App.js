import React, { Component } from 'react';
import { Provider,connect } from 'react-redux';
import store from './components/store/store';
import { Router, Scene } from 'react-native-router-flux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Animated
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
import Maps from './components/maps/maps';

const transitionConfig = () => ({
  screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [layout.initWidth, 0, 0]
      });

      const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
          outputRange: [0, 1, 1, 0.3, 0]
      });

      return { opacity, transform: [{ translateX }] }
  }
})
export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store} >
         <Router>
          <Scene key="root"
          transitionConfig={transitionConfig}
          >
            <Scene key="Wellcome"
              component={Wellcome}
              title="Wellcome"
            />
            <Scene key="Login"
              component={Login}
            />
            <Scene key="DetailFilm"
              component={DetailFilm}
            />
            <Scene key="Promotion"
              component={Promotion}
              title="Promotion"
            />
             <Scene key="PromotionDetail"
              component={PromotionDetail}
              title="PromotionDetail"
            />
            <Scene key="Notification"
              component={Notification}
              title="Notification"
            />
            <Scene key="NotificationDetail"
              component={NotificationDetail}
              title="NotificationDetail"
            />
            <Scene key="Home"
              component={Home}
              title="Home"
            />
            <Scene
              key="BookHistory"
              component={BookHistory}
              title="BookHistory"
            />
            <Scene
              key="Maps"
              component={Maps}
              title="Maps"
            />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
