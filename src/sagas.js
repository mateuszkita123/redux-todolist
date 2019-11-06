import * as actions from './actions/index';
import fetch from 'isomorphic-fetch';
import { put, takeEvery } from 'redux-saga/effects'

let count = 0;

export function* getData() {
  try {
    if(count < 200)
      count++;
    else
      count = 1;
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
