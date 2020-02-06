import { connect } from 'react-redux';
import { requestAllChannels } from '../../actions/channel_actions';
import { 
  selectAllChannels,
  selectAllDirectChannels 
} from '../../reducers/selectors';
import Sidebar from './sidebar';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  channels: selectAllChannels(state),
  directChannels: selectAllDirectChannels(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestAllChannels: () => dispatch(requestAllChannels())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
