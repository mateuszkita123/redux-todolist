import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo} from '../actions/';

let DeleteTodo = ({id, completed, dispatch}) => {
  return (
    <div className="todo-delete-item">
      {completed ?
      (<span
      onClick={e => {
        e.preventDefault()
        if(completed) {
          dispatch(deleteTodo(id));
        }
      }}
      className="float-left red">
        <i className="fa fa-trash"></i>
      </span>) : ''}
    </div>
  )
}

DeleteTodo = connect()(DeleteTodo);

export default DeleteTodo
