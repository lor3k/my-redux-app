import { createStore, combineReducers } from 'redux'
import textReducer from './state/text'

const reducer = combineReducers({
    text : textReducer
})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)