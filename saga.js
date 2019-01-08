import { delay } from 'redux-saga'
import { takeEvery, all, put } from 'redux-saga/effects'

function* HelloSaga() {
  console.log('hello saga')
}

function* WatchFetchUser() {
  yield takeEvery('INCREMENT_ASYNC', FetchUser)
}

function* FetchUser() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

export function* rootSaga() {
  yield all([
    HelloSaga(),
    WatchFetchUser(),
  ])
}