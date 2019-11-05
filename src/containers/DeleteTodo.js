import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo} from '../actions/';
import Todo from '../components/Todo';

let DeleteTodo = ({id, completed, dispatch}) => {
  return (
      <div>
        <span onClick={e => {
          e.preventDefault()
          if(completed) {
            dispatch(deleteTodo(id));
            // console.log(id);
            // console.log(dispatch(deleteTodo(id)));
          }
        }}>X</span>
      </div>
  )
}

DeleteTodo = connect()(DeleteTodo);

export default DeleteTodo
