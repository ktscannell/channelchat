import { RECEIVE_ALL_CHANNELS, RECEIVE_SINGLE_CHANNEL } from '../actions/channel_actions';
import merge from 'lodash/merge';
const channelReducer = ( state = {}, action) => {
  Object.freeze(state);

  let channel;

  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
      return action.channels;
    case RECEIVE_SINGLE_CHANNEL:
      channel = action.payload.channel;
      return Object.assign({}, state, { [channel.id]: channel })
    default:
      return state;
  }
}

export default channelReducer;