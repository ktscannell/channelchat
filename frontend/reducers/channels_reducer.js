import { RECEIVE_ALL_CHANNELS } from '../actions/channel_actions';
import merge from 

const channelReducer = ( state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
      return action.channels;
    default:
      return state;
  }
}

export default channelReducer;