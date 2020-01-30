import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import ClientHeader from './client_header';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const currentChannel = 
    state.entities.channels[ownProps.match.params.channelId]
  return {
    channel: currentChannel
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ClientHeader)
);