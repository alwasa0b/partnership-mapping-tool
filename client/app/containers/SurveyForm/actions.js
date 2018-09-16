import { createAction } from 'redux-act';

export const onSave = createAction('survey form saved');
export const onCancel = createAction('survey form canceled');
export const update = createAction('survey form updated');
export const surveyReceived = createAction('survey form received');
