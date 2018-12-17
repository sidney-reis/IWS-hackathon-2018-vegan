import { connect } from 'react-redux';
import Screen from '../screens/HomeScreen';
import { getUserStatus, postUserAnswers } from '../actions/users';

const mapStateToProps = state => ({
  userStatus: state.user.status,
});

const mapDispatchToProps = dispatch => ({
  getUserStatus: userId => dispatch(getUserStatus(userId)),
  postUserAnswers: userId => dispatch(postUserAnswers(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
