import Reducer from "./Reducer/Reducer";
import {combineReducers, createStore} from 'redux'

const rootReducer=combineReducers({Reducer})
const store=createStore(rootReducer)

export default store