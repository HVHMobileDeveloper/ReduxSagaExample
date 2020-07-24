import { all } from 'redux-saga/effects';
import { watchDecrement, watchIncrement } from './counterSaga';
import profileSaga from './profileInforSaga';

export default function* rootSaga() {
    yield all([
        watchDecrement(),
        watchIncrement(),
        profileSaga(),
    ]);
}