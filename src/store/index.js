import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import history from '../reducers'

const store = createStore(history, applyMiddleware(thunk))

export default store