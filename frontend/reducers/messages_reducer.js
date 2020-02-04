import { RECEIVE_SINGLE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_MESSAGE } from '../actions/message_actions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);

  let messages;

  switch (action.type) {
    case RECEIVE_SINGLE_CHANNEL:
      messages = action.payload.messages;
      return Object.assign({}, state, messages);
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, { 
        [action.payload.message.id]: action.payload.message 
      });
    default:
      return state;
  }
}

export default messagesReducer;