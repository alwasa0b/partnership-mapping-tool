import { post, get } from 'utils/service';

export const saveSurvey = data => post('/api/admin/survey', data);
export const getSurvey = id => get(`/api/admin/survey/${id}`);
