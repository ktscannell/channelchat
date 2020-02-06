import { 
  RECEIVE_ALL_CHANNELS, 
  RECEIVE_SINGLE_CHANNEL, 
  RECEIVE_DIRECT_CHANNEL 
} from '../actions/channel_actions';
import { RECEIVE_MESSAGE } from '../actions/message_actions';
import merge from 'lodash/merge';
const channelReducer = ( state = {}, action) => {
  Object.freeze(state);

  let channel;

  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
      return action.channels;
    case RECEIVE_SINGLE_CHANNEL:
      channel = action.payload.channel;
      return Object.assign({}, state, { [channel.id]: channel });
    case RECEIVE_MESSAGE:
      // Add the message id to the channel's array of messages ids
      const nextState = Object.assign({}, state); 
      nextState[action.payload.message.channel_id].message_ids
        .push(action.payload.message.id);
      return nextState;
    case RECEIVE_DIRECT_CHANNEL:
      channel = action.payload.channel
      return Object.assign({}, state, { [channel.id]: channel })
    default:
      return state;
  }
}

export default channelReducer;