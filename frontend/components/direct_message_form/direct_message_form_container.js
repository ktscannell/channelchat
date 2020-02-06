import { connect } from 'react-redux';
import { requestAllUsers } from '../../actions/user_actions';
import { DirectMessageForm } from './direct_message_form';
import { selectAllOtherUsers } from '../../reducers/selectors';

const mapStateToProps = state => ({
  users: selectAllOtherUsers(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllUsers: () => dispatch(requestAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(DirectMessageForm);