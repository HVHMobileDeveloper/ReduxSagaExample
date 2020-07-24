import ReducerCounter from '../counter'
import ReducerProfile from '../profileInfo'
const { combineReducers } = require("redux");

const CombineReducer = combineReducers({
    ReducerCounter,
    ReducerProfile,
})

export default CombineReducer;