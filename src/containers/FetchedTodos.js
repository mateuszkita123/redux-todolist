import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class FetchedTodos extends React.Component {
    componentDidMount() {
      const { getDataRequested } = this.props;
      getDataRequested();
    }
  
    render() {
      const { isLoading, isError, todos } = this.props;
  
      return (
        <div>
          {todos.map((item, index) => {
            return (<div key={index}>
              {item.title}
            </div>);
          })}
        </div>
      );
    }
  }
  
  const mapStateToProps = (state) => {
    return state;
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      getDataRequested: () => dispatch(actions.getDataRequested())
    }
  };
  
FetchedTodos = connect(mapStateToProps, mapDispatchToProps)(FetchedTodos);

export default FetchedTodos