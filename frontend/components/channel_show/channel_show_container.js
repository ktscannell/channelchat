import { connect } from 'react-redux';
import { selectChannelMessages } from '../../reducers/selectors';
import { requestSingleChannel } from '../../actions/channel_actions';
import ChannelShow from './channel_show';

const mapStateToProps = (state, { match: { params: { channelId }}}) => ({
  messages: selectChannelMessages(state, state.entities.channels[channelId])
});

const mapDispatchToProps = (dispatch) => ({
  requestSingleChannel: (channelId) => dispatch(requestSingleChannel(channelId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelShow);