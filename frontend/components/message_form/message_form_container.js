import { connect } from 'react-redux';
import MessageForm from './message_form';
import { createMessage } from '../../actions/message_actions';
import { selectCurrentChannel } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  // debugger;
  return {
    currentChannel: selectCurrentChannel(
      state, 
      ownProps.match.params.channelId
    )};
}

const mapDispatchToProps = dispatch => ({
  createMessage: (message) => dispatch(createMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);