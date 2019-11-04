import 'babel-polyfill';
import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connect, Provider } from 'react-redux';
import * as actions from './actions';
import { reducer } from './reducer';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  { isLoading: false, isError: false, todos: [] },
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

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

render(
  <Provider store={store}>
    <FetchedTodos />
  </Provider>
  , document.getElementById('root')
);