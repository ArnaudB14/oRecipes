import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';
import { changeUserField, logIn, logOut } from '../../actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.logged,
  loggedMessage: state.user.logged ? `Bienvenue ${state.user.username}` : '',
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (fieldValue, fieldName) => {
    dispatch(changeUserField(fieldValue, fieldName));
  },
  handleLogin: () => {
    dispatch(logIn());
  },
  handleLogout: () => {
    dispatch(logOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
