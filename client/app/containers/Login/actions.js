import { createAction } from 'redux-act';

export const update = createAction('update username or password');
export const login = createAction('login');
export const tokenReceived = createAction('user token received');
