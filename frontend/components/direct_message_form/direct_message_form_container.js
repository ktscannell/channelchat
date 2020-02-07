import { connect } from 'react-redux';
import { requestAllUsers } from '../../actions/user_actions';
import { createDirectMessage } from '../../actions/channel_actions';
import DirectMessageForm from './direct_message_form';
import { selectAllOtherUsers } from '../../reducers/selectors';

const mapStateToProps = state => ({
  users: selectAllOtherUsers(state),
  currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  requestAllUsers: () => dispatch(requestAllUsers()),
  createDirectMessage: userIds => dispatch(createDirectMessage(userIds))
});

export default connect(mapStateToProps, mapDispatchToProps)(DirectMessageForm);