import { authenticate } from 'utils/service';

export const getToken = data => authenticate('/api/login', data);
