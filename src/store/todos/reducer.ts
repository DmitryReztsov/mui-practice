import {ITodoState, TodosAction, TodosActionTypes} from './types';

const initialState : ITodoState = {
  todos: [],
  loading: false,
  error: null,
};

function todosReducer(state: ITodoState = initialState, action: TodosAction) {
  switch (action.type) {
    case TodosActionTypes.LOADING_FETCH_TODOS: {
      return {...state, todos: [], loading: true, error: null}
    }
    case TodosActionTypes.FETCH_TODOS: {
      return {...state, todos: action.payload, loading: false}
    }
    case TodosActionTypes.ERROR_FETCH_TODOS: {
      return {...state, loading: false, error: action.payload}
    }
    case TodosActionTypes.DELETE_TODO: {
      return {...state, todos: state.todos.filter((todo) => todo.id !== action.payload)}
    }
    case TodosActionTypes.PATCH_TODO: {
      return {...state, todos: state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo)}
    }
    default: {
      return state;
    }
  }
}

export default todosReducer;
