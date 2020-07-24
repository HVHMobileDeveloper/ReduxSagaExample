import ReducerCounter from '../counter'
const { combineReducers } = require("redux");

const CombineReducer = combineReducers({
    ReducerCounter,
})

export default CombineReducer;