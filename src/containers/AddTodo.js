import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const disabledactiveAddTodo = <button className="button button-add-disabled" disabled>Add Todo</button>
const activeAddTodo = <button className="button" type="submit"><span>Add Todo</span></button>

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
        <h1>Todo List</h1>
        <input ref={node => input = node} type="text" placeholder="Add new todo..." />
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
