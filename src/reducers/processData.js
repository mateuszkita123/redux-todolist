import * as actions from '../actions';

let nextTodoId = 0;

const initialState = {
  isLoading: false,
  isError: false,
  todos: [{
    id: nextTodoId++,
    title: "learn hooks",
    completed: false
  },
  {
    id: nextTodoId++,
    title: "develop app",
    completed: false
  }]
};

const processData = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_DATA_REQUESTED:
      return {
        ...state,
        isLoading: true
      };
    case actions.GET_DATA_DONE:
      if(typeof action.payload === "object") {
        if(action.payload.length) {
          let newArrAfterFetchingData = action.payload.map(item => {
            const container = {};

            container.id = nextTodoId++;
            container.title = item.title;
            container.completed = item.completed;

            return container;
          });
          let newArrAfterMerge = state.todos.concat(newArrAfterFetchingData);
          const newObj = Object.assign({}, state, {
            todos: newArrAfterMerge
        })
        return newObj;
      } else {
        const singleObj = {};
          singleObj.id = nextTodoId++;
          singleObj.title = action.payload.title;
          singleObj.completed = action.payload.completed;
        return {
          ...state,
          todos: state.todos.concat(singleObj)
        }
      }} else {
        return state
      }
    case actions.GET_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    case actions.ADD_TODO:
      if(state.todos.length < 10) {
        const newObj = Object.assign({}, state, {
          todos: [
            ...state.todos,
            {
              id: nextTodoId++,
              title: action.title,
              completed: false
            }
          ]
        })
        return newObj;
      }
      else {
        return state
      };
    case actions.DELETE_TODO:
      let newArrAfterDelete = state.todos.filter(todo => todo.id !== action.id);
      return {
        ...state,
        todos: newArrAfterDelete
      }
    case actions.TOGGLE_TODO:
      let newArrAfterToggle = state.todos.map(todo =>
        (todo.id === action.id)
          ? {
            ...todo,
            completed: !todo.completed
          }
          : todo
      )
      return { 
        ...state,
        todos: newArrAfterToggle
      }
    default:
      return state;
  }
};

export default processData