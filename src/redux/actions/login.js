import { types } from "../../types/types";

export const loading = (isLoading) => {
  return {
    type: types.isLoading,
    payload: isLoading,
  };
};
