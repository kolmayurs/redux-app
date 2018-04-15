import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

const middleWare = applyMiddleware( promise(), thunk, logger);	

export default createStore(reducers,middleWare)