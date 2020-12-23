import { types } from "../types/types";

const initialState = {
  logged: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.login:
      return { uid: payload.uid, name: payload.displayName, logged: true };
    case types.logout:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
