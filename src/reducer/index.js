import authReducer from "./auth.reducer";
import { combineReducers } from 'redux';
import customerReducer from './customer.reducer';
const rootReducer = combineReducers({
    auth: authReducer,
    customer: customerReducer,
});

export default rootReducer;