import {createStore} from 'redux';

import history from '../reducers'

const store = createStore(history)

export default store