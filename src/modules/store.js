// import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { generateStore } from 'drizzle';

import reducer from './reducer';
import rootSaga from './sagas';
import * as contract from "../contracts/contract.json"
const drizzleOptions = {
	contracts: [
		contract
	]
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

export default store;
export {
	drizzleOptions
};