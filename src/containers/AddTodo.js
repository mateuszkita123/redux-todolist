import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
// import TodoList from '../components/TodoList'

const disabledactiveAddTodo = <button disabled>Add Todo</button>
const activeAddTodo = <button type="submit">Add Todo</button>

let AddTodo = ({ todos, dispatch }) => {
  let input;

  return (
    <div className="todo-add-item">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <h1>To-Do List <i className="fa fa-plus"></i></h1>
        <input ref={node => input = node} type="text" placeholder="Add new task..." />
        {todos.length < 10 ? activeAddTodo : disabledactiveAddTodo}
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.processData.todos
  }
};
AddTodo = connect(mapStateToProps)(AddTodo)

export default AddTodo
