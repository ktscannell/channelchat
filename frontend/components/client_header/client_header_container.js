import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import ClientHeader from './client_header';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    channel: state.entities.channels[ownProps.match.params.channelId]
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ClientHeader)
);