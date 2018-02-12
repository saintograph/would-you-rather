import { createStore } from 'redux'
import { counter } from './'

const store = createStore(counter);

export default store;