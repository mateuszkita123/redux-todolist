import * as actions from '../actions/actions';

const initialState = {
  isLoading: false, 
  isError: false, 
  todos: [{
    id: "dhwauhd8a",
    title: "Read a book about redux",
    completed: false
  },
  {
    id: "dhwauhd8b",
    title: "Fix a computer",
    completed: false
  }]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_DATA_REQUESTED:
      return { 
        ...state,
        isLoading: true
      };
    case actions.GET_DATA_DONE:
      return { ...state,
        isLoading: false,
        todos: [...state.todos.concat(action.payload)]
      };
    case actions.GET_DATA_FAILED:
      return { ...state,
        isLoading: false,
        isError: true
      }
    case 'ADD_TODO':
      if(state.todos.length < 10) {
        const newObj = Object.assign({}, state, {
          todos: [
            ...state.todos,
            {
              title: action.title,
              completed: false
            }
          ]
        })
        return newObj;
        // return {
        //   ...state,
        //   isLoading: false,
        //   todos: [...state.todos, {title: action.title, completed: false}]
        // }
      }
      else {
        console.log("Too much tasks.");
        return state
      };
    // case 'DELETE_TODO':
    //   return state.todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state;
  }
};