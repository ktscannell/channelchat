import * as APIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

// No dispatching needed here because action cable will
// send back the message immediately
export const createMessage = message => dispatch => (
  APIUtil.createMessage(message)
);

export const receiveMessage = payload => ({
  type: RECEIVE_MESSAGE,
  payload
});