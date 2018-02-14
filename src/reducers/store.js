import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { questionsReducer, usersReducer } from './'

const reducers = combineReducers({
  questions: questionsReducer,
  users: usersReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
