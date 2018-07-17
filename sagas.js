//import "regenerator-runtime/runtime";

import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'

export function* incrementAsync() {
  yield call (delay, 1000)
  yield put ({type: 'INCREMENT'})
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}


export default function* rootSaga() {
  yield all([
    incrementAsync(),
    watchIncrementSaga()
  ])
}
