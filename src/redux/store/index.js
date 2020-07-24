import allReducer from '../reducer'
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../../sagas/rootSaga';
const { createStore, applyMiddleware } = require("redux");


const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;