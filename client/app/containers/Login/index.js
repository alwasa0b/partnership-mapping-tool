import { compose } from 'redux';
import { connect } from 'react-redux';
import Login from 'components/Login';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import * as actions from './actions';
import saga from './saga';
import reducer from './reducers';
import { getLogin } from './selectors';

const withConnect = connect(
  state => {
    const { username, password, isAuthenticated } = getLogin(state) || {};
    return { username, password, isAuthenticated };
  },
  dispatch => ({
    update: payload => dispatch(actions.update(payload)),
    login: () => dispatch(actions.login()),
  }),
);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(Login);
