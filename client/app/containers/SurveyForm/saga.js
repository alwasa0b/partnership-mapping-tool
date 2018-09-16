import { takeEvery, select, call, put } from 'redux-saga/effects';
import { saveSurvey, getSurvey } from './service';
import { onSave, surveyReceived } from './actions';
import { getForm } from './selectors';

function* saveForm() {
  const form = yield select(getForm);
  yield call(saveSurvey, form);
}

export default function*({ match }) {
  yield takeEvery(onSave().type, saveForm);
  const item = yield call(getSurvey, match.params.id);
  yield put(surveyReceived(item.data));
}
