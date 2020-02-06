import * as APIUtil from '../util/channel_api_util';

export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS';
export const RECEIVE_SINGLE_CHANNEL = 'RECEIVE_SINGLE_CHANNEL';
export const RECEIVE_DIRECT_CHANNEL = 'RECEIVE_DIRECT_CHANNEL';

export const receiveAllChannels = channels => ({
  type: RECEIVE_ALL_CHANNELS,
  channels
});

export const receiveSingleChannel = payload => ({
  type: RECEIVE_SINGLE_CHANNEL,
  payload
});

export const receiveDirectChannel = payload => ({
  type: RECEIVE_DIRECT_CHANNEL,
  payload
})

export const requestAllChannels = () => dispatch => (
  APIUtil.fetchAllChannels()
    .then(channels => dispatch(receiveAllChannels(channels)))
);

export const requestSingleChannel = channelId => dispatch => (
  APIUtil.fetchSingleChannel(channelId)
    .then(payload => dispatch(receiveSingleChannel(payload)))
);