// import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { Drizzle, generateStore } from "drizzle";

import reducer from "./reducer";
import rootSaga from "./sagas";
import SimpleBank from "../contracts/SimpleBank.json";
const drizzleOptions = {
  contracts: [SimpleBank]
};

// create the store
// const sagaMiddleware = createSagaMiddleware();
const appReducers = { todo: reducer };
const appSagas = [rootSaga];
const store = generateStore({
  drizzleOptions,
  appReducers,
  appSagas
});
// sagaMiddleware.run(rootSaga);
const drizzle = new Drizzle(drizzleOptions, store);

export default store;
export { drizzle, drizzleOptions };
