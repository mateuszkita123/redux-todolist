import * as actions from './actions';
import fetch from 'isomorphic-fetch';
import { put, takeEvery } from 'redux-saga/effects'

export function* getData() {
  try {
    const response = yield fetch('http://jsonplaceholder.typicode.com/todos?_start=10&_limit=5');
    const data = yield response.json();
    yield put(actions.getDataDone(data));
  } catch (e) {
    yield put(actions.getDataFailed(e));
  }
}

export function* getDataSaga() {
  yield takeEvery(actions.GET_DATA_REQUESTED, getData);
}