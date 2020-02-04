import { connect } from 'react-redux';
import { selectChannelMessages } from '../../reducers/selectors';
import { requestSingleChannel } from '../../actions/channel_actions';
import { receiveMessage } from '../../actions/message_actions';
import ChannelShow from './channel_show';

const mapStateToProps = (state, { match: { params: { channelId }}}) => ({
  messages: selectChannelMessages(state, state.entities.channels[channelId]),
  authors: state.entities.users
});

const mapDispatchToProps = (dispatch) => ({
  requestSingleChannel: (channelId) => dispatch(requestSingleChannel(channelId)),
  receiveMessage: message => dispatch(receiveMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelShow);