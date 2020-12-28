import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";

// combinamos reducers
const reducers = combineReducers({
  auth: authReducer,
});

// Carga la extensión de redux en el navegador
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// Aplicamos el middleware redux-thunk para manejar las peticiones asíncronas
const enhancer = composeEnhancers(applyMiddleware(thunk));

// creamos el store
const store = createStore(reducers, enhancer);

export default store;
