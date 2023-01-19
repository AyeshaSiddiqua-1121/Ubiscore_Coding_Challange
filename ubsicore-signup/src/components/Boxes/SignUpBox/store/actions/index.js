import { ADD_USER,SELECT_USER } from "../../../../../constants";


export const  addUser=(user)=>{
    console.log('uSER', user);
  return (dispatch)=>{
    dispatch({
      type: ADD_USER,
      payload: user,
    });
  };
}
export const selectUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: SELECT_USER,
      payload: user,
    });
  };
};