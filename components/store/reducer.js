import { combineReducers } from 'redux';
import {
  POST_STATUS,
  CLEAR_STATUS,
  SEND_MESSAGE,
  CLEAR_MESSAGE
} from './actions';
import { NavigationActions } from 'react-navigation';
import NavigationRoute from '../Router';



const initialNavState = NavigationRoute.router.getStateForAction(NavigationActions.init())

const nav = (state = initialNavState ,action) => {
  switch(action.type) {
      case 'HOME':
          return NavigationRoute.router.getStateForAction(NavigationActions.navigate({routeName: 'HomeView'}),state)
      case 'LOGIN':
          return NavigationRoute.router.getStateForAction(NavigationActions.navigate({routeName: 'Login'}),state)
      case 'NOTIFICATION':
          return NavigationRoute.router.getStateForAction(NavigationActions.navigate({routeName: 'Notification'}),state)
      case 'NOTIFICATION_DETAIL':
          return NavigationRoute.router.getStateForAction(NavigationActions.navigate({routeName: 'NotificationDetail',params:{ title:action.title,description:action.description}}),state)
      case 'DETAIL_FILM':
          return NavigationRoute.router.getStateForAction(NavigationActions.navigate({routeName: 'DetailFilm',params: { id: action.id }  }),state)
      case 'BOOKING_HISORY':
          return NavigationRoute.router.getStateForAction(NavigationActions.navigate({routeName: 'BookHistory'}),state)
      case 'BACK':
          return NavigationRoute.router.getStateForAction(NavigationActions.back(),state);
      case 'Logout':
          return NavigationRoute.router.getStateForAction(NavigationActions.navigate({routeName: 'Completed'}),state)
      default:
          return  NavigationRoute.router.getStateForAction(action,state);
  }
}
/* Navigation redux  */


/* combineReducers */
export default rootReducer = combineReducers({nav});
