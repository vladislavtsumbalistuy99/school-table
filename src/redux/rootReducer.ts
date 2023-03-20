import { combineReducers } from 'redux';
import attendance from './attendance/reducer';
import columns from './columns/reducer';
import rate from './rate/reducer';
import students from './students/reducer';
const rootReducer = combineReducers({ columns, students, attendance, rate });

export default rootReducer;
