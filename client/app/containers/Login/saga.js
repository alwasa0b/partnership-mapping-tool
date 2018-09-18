import { takeEvery, select, call, put } from 'redux-saga/effects';
import { getToken } from './service';
import { login, tokenReceived } from './actions';
import { getLogin } from './selectors';

function* loginSaga() {
  const { username, password } = yield select(getLogin);
  const token = yield call(getToken, { username, password });
  yield put(tokenReceived(token));
}

export default function*() {
  yield takeEvery(login().type, loginSaga);
}
