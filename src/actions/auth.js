import { types } from "../types/types";

export const login = (uid, displayName, logged) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
      logged,
    },
  };
};
