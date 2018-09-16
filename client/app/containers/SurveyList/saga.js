import { call, put } from 'redux-saga/effects';
import { getSurveys } from './service';
import { getSurveysReceived } from './actions';

export default function*() {
  const { data } = yield call(getSurveys);
  yield put(getSurveysReceived(data));
}
