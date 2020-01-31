import { RECEIVE_SINGLE_CHANNEL } from '../actions/channel_actions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);

  let messages;

  switch (action.type) {
    case RECEIVE_SINGLE_CHANNEL:
      messages = action.payload.messages;
      return Object.assign({}, state, messages);
    default:
      return state;
  }
}

export default messagesReducer;