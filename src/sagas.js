import * as actions from './actions/index';
import fetch from 'isomorphic-fetch';
import { put, takeEvery } from 'redux-saga/effects'

let count = 0;

export function* getData() {
  try {
    count++;
    // const response = yield fetch(`http://jsonplaceholder.typicode.com/todos?_start=${firstItem}&_limit=${limit}`);
    const response = yield fetch(`http://jsonplaceholder.typicode.com/todos/${count}`);
    const data = yield response.json();
    yield put(actions.getDataDone(data));
  } catch (e) {
    yield put(actions.getDataFailed(e));
  }
}

export function* getDataSaga() {
  yield takeEvery(actions.GET_DATA_REQUESTED, getData);
}
