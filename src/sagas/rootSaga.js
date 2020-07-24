import { all } from 'redux-saga/effects';
import { watchDecrement, watchIncrement } from './counterSaga';

export default function* rootSaga() {
    yield all([
        watchDecrement(),
        watchIncrement(),
    ]);
}