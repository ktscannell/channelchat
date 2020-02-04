import * as APIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const createMessage = message => dispatch => (
  APIUtil.createMessage(message)
);

export const receiveMessage = payload => ({
  type: RECEIVE_MESSAGE,
  payload
});