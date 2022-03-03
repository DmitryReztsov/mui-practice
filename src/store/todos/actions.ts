import axios from 'axios';
import {Dispatch} from 'redux';
import {JSON_URL} from '../../utils/settings';
import {ITodo, TodosActionTypes} from './types';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    dispatch({type: TodosActionTypes.LOADING_FETCH_TODOS})
    try {
      const response = await axios.get(JSON_URL);
      dispatch({type: TodosActionTypes.FETCH_TODOS, payload: response.data})
    } catch (e) {
      dispatch({type: TodosActionTypes.ERROR_FETCH_TODOS, payload: e})
    }
  }
}

export const deleteTodo = (id: number) => {
    return ({type: TodosActionTypes.DELETE_TODO, payload: id});
}

export const patchTodo = (todo: ITodo) => {
  return ({type: TodosActionTypes.PATCH_TODO, payload: todo});
}
