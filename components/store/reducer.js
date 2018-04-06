import { combineReducers } from 'redux';
import {
  POST_STATUS,
  CLEAR_STATUS,
  SEND_MESSAGE,
  CLEAR_MESSAGE
} from './actions';


const user = (state = [] ,action) => {
  switch(action.type) {
      case 'UPDATE':
          return state
      default:
          return  state
  }
}
/* Navigation redux  */


/* combineReducers */
export default rootReducer = combineReducers({user});
