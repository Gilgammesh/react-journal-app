import { firebase, googleAuthProvider } from "../../firebase/firebase.config";
import { types } from "../../types/types";

export const startLogin = ({ email, password }) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(12345, "Carlos", true));
    }, 3500);
  };
};

export const startLoginGoogle = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        const { uid, displayName } = user;
        dispatch(login(uid, displayName, true));
      });
  };
};

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
