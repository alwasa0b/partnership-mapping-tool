import { compose } from 'redux';
import { connect } from 'react-redux';
import SurveyForm from 'components/SurveyForm';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import * as actions from './actions';
import saga from './saga';
import reducer from './reducers';

const withConnect = connect(
  state => ({ form: state.get('surveyForm') }),
  dispatch => ({
    onSave: () => dispatch(actions.onSave()),
    onCancel: () => dispatch(actions.onCancel()),
  }),
);

const withReducer = injectReducer({ key: 'surveyForm', reducer });
const withSaga = injectSaga({ key: 'surveyForm', saga });

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(SurveyForm);
