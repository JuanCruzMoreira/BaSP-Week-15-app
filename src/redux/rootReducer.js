import { combineReducers } from 'redux';

import membersReducer from './members/reducer';
import trainersReducer from './trainers/reducer';
import activitiesReducer from './activities/reducer';
import adminsReducer from './admins/reducer';
import authReducer from './auth/reducer';

const rootReducer = combineReducers({
  admins: adminsReducer,
  activities: activitiesReducer,
  // ,classes: classesReducer
  members: membersReducer,
  // ,subscriptions: subscriptionsReducer
  // ,superAdmins: superAdminsReducer
  trainers: trainersReducer,
  auth: authReducer,
});

export default rootReducer;
