import CombineReducer from '../reducer'
const { createStore } = require("redux");

const store = createStore(CombineReducer)

export default store;