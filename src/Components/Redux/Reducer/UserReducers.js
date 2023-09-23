import { addUser } from "../ActionType/ActionType";
import { initialState } from "../State/UserState";

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case addUser:
      return {
        ...state,
        addUser: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;
