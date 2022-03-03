import {composeWithDevTools} from '@redux-devtools/extension';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import todosReducer from './todos/reducer';

const combinedReducer = combineReducers({
  todos: todosReducer,
});

const composeEnhancers = composeWithDevTools({});

export type RootState = ReturnType<typeof combinedReducer>

export const store = createStore(combinedReducer, {}, composeEnhancers(applyMiddleware(thunk)));
