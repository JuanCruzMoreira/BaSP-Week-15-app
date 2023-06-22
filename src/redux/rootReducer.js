import { combineReducers } from 'redux';

import membersReducer from './members/reducer';
import trainersReducer from './trainers/reducer';
import activitiesReducer from './activities/reducer';
import adminsReducer from './admins/reducer';
import authReducer from './auth/reducer';

const rootReducer = combineReducers({
  admins: adminsReducer,
  activities: activitiesReducer,
  members: membersReducer,
  auth: authReducer,
  trainers: trainersReducer
});

export default rootReducer;
