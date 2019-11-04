import * as actions from '../actions';

let nextTodoId = 0;

const initialState = {
  isLoading: false, 
  isError: false, 
  todos: [{
    id: nextTodoId++,
    title: "Read a book about redux",
    completed: false
  },
  {
    id: nextTodoId++,
    title: "Fix a computer",
    completed: false
  }]
};

const processData = (state = initialState, action) => {
  console.log("PROCASS DATA state: ", state)
  console.log("ACTION: ", action.type)
  switch (action.type) {
    case actions.GET_DATA_REQUESTED:
      return {
        ...state,
        isLoading: true
      };
    case actions.GET_DATA_DONE:
        const newObj = Object.assign({}, state, {
          todos: [
            ...state.todos,
            {
              id: nextTodoId++,
              title: action.payload.title,
              completed: false
            }
          ]
        })
        return newObj;
    case actions.GET_DATA_FAILED:
      return { ...state,
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
        console.log("Too much tasks.");////////////////////////////////////////////
        return state
      };
    case actions.DELETE_TODO:
      return state.todos.filter(todo => todo.id !== action.id);
    case actions.TOGGLE_TODO:
      console.log("TOGGLE_TODO state.todos: ", state.todos);
      let newArr = state.todos.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
      console.log("TOGGLE_TODO newArr: ", newArr);
      return newArr
    default:
      return state;
  }
};

export default processData