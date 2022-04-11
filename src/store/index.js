import { createStore, applyMiddleware } from 'redux';
import thunk from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
