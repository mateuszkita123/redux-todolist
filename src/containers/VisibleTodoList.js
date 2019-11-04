import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
    console.log("getVisibleTodos = (" + todos + ", " + filter + ")");
    console.log("10. typeof todos: ", typeof todos);
    console.log("11. todos: ", todos);
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
        console.log("VisibilityFilters.SHOW_ALL: ");
        console.log("11111: ", todos);
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
            console.log("22222: ", todos.filter(t => t.completed));
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
            console.log("33333: ", todos.filter(t => !t.completed));
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.processData.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
