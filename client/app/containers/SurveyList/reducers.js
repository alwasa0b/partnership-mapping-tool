import { createReducer } from 'redux-act';
import {
  getSurveys,
  getSurveysReceived,
  handleSurveySelected,
} from './actions';

export default createReducer(
  {
    [getSurveysReceived]: (_state, payload) => ({
      items: payload,
      loading: false,
    }),
    [getSurveys]: state => ({ ...state, loading: true }),
    [handleSurveySelected]: (state, payload) => ({
      ...state,
      selectedId: payload.id,
    }),
  },
  { items: [], loading: false, selectedId: 0 },
);
