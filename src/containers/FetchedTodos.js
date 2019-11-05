import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class FetchedTodos extends React.Component {
  componentDidMount() {
    const { todos, getDataRequested } = this.props;
    for(let i=todos.length; i < 6; i++) {
      getDataRequested();
    }
  }

  render() {
    const { isLoading, isError, todos, getDataRequested } = this.props;
    const activeButton = <button onClick={getDataRequested}>Fetch task from "JSONPlaceholder"</button>;
    const disabledButton = <button disabled>Reached maximum number of tasks</button>
    return (
    <div>
      {todos.length < 10 ? activeButton : disabledButton }
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.processData.todos
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDataRequested: () => dispatch(actions.getDataRequested())
  }
};

export default FetchedTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchedTodos);
