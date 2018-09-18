import { createReducer } from 'redux-act';
import { update, tokenReceived } from './actions';

const initialState = {
  username: '',
  password: '',
  token: '',
  isAuthenticated: false,
};

export default createReducer(
  {
    [update]: (state, payload) => ({ ...state, [payload.key]: payload.value }),
    [tokenReceived]: (_state, payload) => ({
      token: payload,
      isAuthenticated: true,
    }),
  },
  initialState,
);
