import { connect } from 'react-redux';
import { requestAllChannels } from '../../actions/channel_actions';
import { selectAllChannels } from '../../reducers/selectors';
import Sidebar from './sidebar';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  channels: selectAllChannels(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestAllChannels: () => dispatch(requestAllChannels())
  // requestChannel: this will get channel detail eventually
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
