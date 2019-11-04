import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class FetchedTodos extends React.Component {
  componentDidMount() {
    const { getDataRequested } = this.props;
    getDataRequested();
  }

  render() {
    const { isLoading, isError, todos } = this.props;
    return (
    <div>
      <button>Fetch task from "JSONPlaceholder"</button>
    </div>
    );
  }
  
//   render() {
//     const { isLoading, isError, todos } = this.props;
//     return (
//       <div><button>Fetch task from "JSONPlaceholder"</button>
//         {todos.map((item, index) => {
//           return (<div key={index}>
//             {item.title}
//           </div>);
//         })}
//       </div>
//     );
//   }
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

export default FetchedTodos = connect(mapStateToProps, mapDispatchToProps)(FetchedTodos);
