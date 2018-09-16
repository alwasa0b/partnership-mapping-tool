import SurveyList from 'components/SurveyList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { getSurveys } from './selectors';
import reducer from './reducers';
import saga from './saga';
import {
  handleSurveySelected,
  handleCreate,
  handleView,
  handleUpdate,
} from './actions';

const SurveyListContainer = connect(
  state => ({ items: getSurveys(state) }),
  dispatch => ({
    onSurveySelected: survey => dispatch(handleSurveySelected(survey)),
    onCreate: () => dispatch(handleCreate('create')),
    onView: () => dispatch(handleView('view')),
    onUpdate: () => dispatch(handleUpdate('update')),
  }),
)(SurveyList);

const withReducer = injectReducer({ key: 'survey', reducer });
const withSaga = injectSaga({ key: 'survey', saga });

export default compose(
  withReducer,
  withSaga,
)(SurveyListContainer);
