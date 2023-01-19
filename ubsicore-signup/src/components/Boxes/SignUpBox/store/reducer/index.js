import { ADD_USER, SELECT_USER } from "../../../../../constants";

// Initial State
const initialState = {
    users:[],
    selectedUser:{}
};
// Reducer cases
const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
        return { users: [...state.users, action.payload] };
    case SELECT_USER:
        return {...state,selectedUser:action.payload}
    default:
        return state;
  }
};

export default signupReducer;
