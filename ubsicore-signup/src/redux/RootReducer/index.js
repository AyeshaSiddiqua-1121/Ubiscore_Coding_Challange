import { combineReducers } from "redux";
import signupReducer from "../../components/Boxes/SignUpBox/store/reducer";
export default combineReducers({
  signup:signupReducer
});
