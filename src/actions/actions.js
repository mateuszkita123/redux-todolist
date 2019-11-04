export const GET_DATA_REQUESTED = 'GET_DATA_REQUESTED';
export const GET_DATA_DONE = 'GET_DATA_DONE';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';
export const ADD_TODO = 'ADD_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function getDataRequested() {
  return {
    type: 'GET_DATA_REQUESTED'
  };
}

export function getDataDone(data) {
  return {
    type: 'GET_DATA_DONE',
    payload: data
  };
}

export function getDataFailed(error) {
  return {
    type: 'GET_DATA_FAILED',
    payload: error
  };
}

let nextTodoId = 0
export const addTodo = title => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  title
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})
