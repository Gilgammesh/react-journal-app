import Swal from "sweetalert2";
import { firebase, googleAuthProvider } from "../../firebase/firebase.config";
import { types } from "../../types/types";
import { loading } from "./login";

export const startLogin = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        const { uid, displayName } = user;
        dispatch(loading(false));
        dispatch(login(uid, displayName, true));
      })
      .catch((err) => {
        dispatch(loading(false));
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
        });
      });
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
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
        });
      });
  };
};

export const startRegister = (name, email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        const { uid, displayName } = user;
        dispatch(login(uid, displayName, true));
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
        });
      });
  };
};

export const startLogout = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(logout());
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
        });
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

export const logout = () => {
  return {
    type: types.logout,
  };
};
