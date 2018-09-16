import { createAction } from 'redux-act';

export const getSurveys = createAction('get list of surveys async');
export const getSurveysReceived = createAction(
  'list of surveys has been received',
);
export const handleSurveySelected = createAction('survey has been selected');
export const handleCreate = createAction('create survey');
export const handleView = createAction('view survey');
export const handleUpdate = createAction('update survey');
