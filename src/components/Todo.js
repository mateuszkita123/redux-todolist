import React from 'react'
import PropTypes from 'prop-types'
import DeleteTodo from '../containers/DeleteTodo'

let checkIcon = <span className="float-right green"><i className="fa fa-check"></i></span>
let inProgressIcon = <span className="float-right yellow"><i className="fa fa-spinner"></i></span>
let done = <li><div className="task_title">title,</div><div className="task_status"> status: Done</div>{checkIcon}</li>;
let inProgress = <li><div className="task_title">title,</div><div className="task_status"> status: In progress</div>{inProgressIcon}</li>

const Todo = ({ id, onClick, completed, title }) => (
  <li
    className="todo-item"
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <div className="task_title">{title}. </div>
    <div className="task_status">Status: {completed ? 'done.' : 'in progress...'}
    {completed ? checkIcon : inProgressIcon }</div>
    <DeleteTodo
      id={id}
      completed={completed}
    />
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default Todo