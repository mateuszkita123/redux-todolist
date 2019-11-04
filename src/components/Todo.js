import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, title }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {title}, Status: {completed ? 'completed' : 'in progress'}
    {/* <DeleteTodo
      id={id}
      completed={completed}
    /> */}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default Todo
