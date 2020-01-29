import * as APIUtil from '../util/channel_api_util';

export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS';

export const receiveAllChannels = channels => ({
  type: RECEIVE_ALL_CHANNELS,
  channels
});

export const requestAllChannels = () => dispatch => (
  APIUtil.fetchAllChannels()
    .then(channels => dispatch(receiveAllChannels(channels)))
);