import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo} from '../actions/';

let DeleteTodo = ({id, completed, dispatch}) => {
  return (
      <div>
        <span onClick={e => {
          e.preventDefault()
          if(completed) {
            dispatch(deleteTodo(id));
          }
        }}>X</span>
      </div>
  )
}

DeleteTodo = connect()(DeleteTodo);

export default DeleteTodo
