import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import JournalScreen from "../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";
import { firebase } from "../firebase/firebase.config";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        const { uid, displayName } = user;
        dispatch(login(uid, displayName, true));
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsAuth]);

  if (checking) {
    return <h1>Espere...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute path="/auth" isAuth={isAuth} component={AuthRouter} />
          <PrivateRoute path="/" isAuth={isAuth} component={JournalScreen} />
          <Redirect to="auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
