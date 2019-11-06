import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo} from '../actions/';

class DeleteTodo extends React.Component {
  render() {
    const {id, completed, dispatch} = this.props;

    return (
      <span
        className="float-left red todo-delete-item"
        onClick={e => {
          e.preventDefault()
          if(completed) {
            dispatch(deleteTodo(id));
          }
        }}
      >
        {completed ? <i className="fa fa-trash"></i> : ""}
      </span>)
  }
}

DeleteTodo = connect()(DeleteTodo);

export default DeleteTodo
