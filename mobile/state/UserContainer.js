import { connect } from 'react-redux';
import { startLoading, stopLoading } from '../actions/loading';
import { setUser } from '../actions/users';

const mapStateToProps = (state) => ({
  loading: state.loading,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  startLoading: () => {
    dispatch(startLoading());
  },
  stopLoading: () => {
    dispatch(stopLoading());
  },
  setUser: (user) => {
    dispatch(setUser(user))
  },
});

export default WrappedComponent => connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
