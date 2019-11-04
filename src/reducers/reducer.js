import * as actions from '../actions/actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.GET_DATA_REQUESTED:
      return { ...state, isLoading: true };
    case actions.GET_DATA_DONE:
      return { ...state, isLoading: false, todos: action.payload };
    case actions.GET_DATA_FAILED:
      return { ...state, isLoading: false, isError: true }
    default:
      return state;
  }
};