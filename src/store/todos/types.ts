export interface ITodo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

export interface ITodoState {
  todos: ITodo [],
  loading: boolean,
  error: Error | null,
}

export enum TodosActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  LOADING_FETCH_TODOS = 'LOADING_FETCH_TODOS',
  ERROR_FETCH_TODOS = 'ERROR_FETCH_TODOS',
  DELETE_TODO = 'DELETE_TODO',
  PATCH_TODO = 'PATCH_TODO',
}

export interface FetchTodosAction {
  type: TodosActionTypes.FETCH_TODOS,
  payload: ITodo [],
}

export interface LoadingFetchTodosAction {
  type: TodosActionTypes.LOADING_FETCH_TODOS,
}

export interface ErrorFetchTodosAction {
  type: TodosActionTypes.ERROR_FETCH_TODOS,
  payload: Error,
}

export interface DeleteTodoAction {
  type: TodosActionTypes.DELETE_TODO,
  payload: number,
}

export interface PatchTodoAction {
  type: TodosActionTypes.PATCH_TODO,
  payload: ITodo,
}

export type TodosAction = FetchTodosAction | LoadingFetchTodosAction | ErrorFetchTodosAction | DeleteTodoAction | PatchTodoAction;
