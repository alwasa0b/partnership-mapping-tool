import { createReducer } from 'redux-act';
import { update, surveyReceived } from './actions';

const initialState = {
  name: 'survay_new3',
  source: 'alalwan@gmail.com',
  schedule: {
    followUpUnit: 'week',
    followUpInterval: 2,
    followUpTimes: 2,
    startingOn: new Date(),
    endingOn: new Date(),
  },
  message: '<div>please fill out {$survey}</div>',
  buckets: [],
  organizations: [],
  targets: [],
};

export default createReducer(
  { [update]: state => state, [surveyReceived]: (_state, payload) => payload },
  initialState,
);
