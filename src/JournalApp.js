import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppRouter from "./routers/AppRouter";
import "moment/locale/es";

const JournalApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default JournalApp;
