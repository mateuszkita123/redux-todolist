import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo} from '../actions/';

let DeleteTodo = ({id, completed, dispatch}) => {
  return (
    <span
      className="todo-delete-item"
      onClick={e => {
        e.preventDefault()
        if(completed) {
          dispatch(deleteTodo(id));
        }
      }}
      className="float-left red">
        <i className="fa fa-trash"></i>
    </span>
  )
}

DeleteTodo = connect()(DeleteTodo);

export default DeleteTodo
