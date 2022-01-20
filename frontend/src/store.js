import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

// to combine all the middle wares here
const reducers = combineReducers({})

// you can add any data for initialState 
const initialState = {}

// add all the middleware here 
const middleware = [thunk]

// create store 
const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store