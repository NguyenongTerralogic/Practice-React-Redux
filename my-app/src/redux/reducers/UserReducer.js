import { GET_USER_LIST } from "../actions/CallAPI";

const initialState = {
  User: [],
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST:
      let updateState = [...action.UserList];
      return updateState;
    default:
      return [...state.User];
  }
};
