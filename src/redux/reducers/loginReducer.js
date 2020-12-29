import { types } from "../../types/types";

const initialState = {
  isLoading: false,
};

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.isLoading:
      return { isLoading: payload };
    default:
      return state;
  }
};

export default loginReducer;
