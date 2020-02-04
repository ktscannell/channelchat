import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SINGLE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_MESSAGE } from '../actions/message_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { 
        [action.currentUser.id]: action.currentUser 
      });
    case RECEIVE_SINGLE_CHANNEL:
      return Object.assign({}, state, action.payload.users);
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, {
        [action.payload.author.id]: action.payload.author
      });
    default:
      return state;
  }
};

export default usersReducer;
