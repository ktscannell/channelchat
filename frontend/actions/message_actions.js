import * as APIUtil from '../util/message_api_util';

export const createMessage = message => dispatch => (
  APIUtil.createMessage(message)
);