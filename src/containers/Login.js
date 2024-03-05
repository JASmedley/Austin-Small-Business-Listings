import { connect } from 'react-redux';
import Login from '../Components/Login.js';
import { login, logout } from '../redux/actions.js'


const mapStateToProps = (state) => {
  return {}
}

const mapDispatchtoProps = (dispatch) => {
  return {
      logout: () => dispatch(logout()),
      login: (username) => dispatch(login(username)),
  }
}

export default connect(mapStateToProps,mapDispatchtoProps)(Login)