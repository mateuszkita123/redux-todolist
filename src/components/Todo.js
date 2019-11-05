import React from 'react'
import PropTypes from 'prop-types'
import DeleteTodo from '../containers/DeleteTodo'

let checkIcon = <span className="float-right green"><i className="fa fa-check"></i></span>
let inProgressIcon = <span className="float-right yellow"><i className="fa fa-spinner"></i></span>

const Todo = ({ id, onClick, completed, title }) => (
  <li
    className="todo-item"
    onClick={onClick}
  > 
    <div>
      <div className="task-info">Task: {title}. Status: {completed ? 'done.' : 'in progress...'}</div>
      {completed ? checkIcon : inProgressIcon }
      <DeleteTodo id={id} completed={completed} />
    </div>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default Todo