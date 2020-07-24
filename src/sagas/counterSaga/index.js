import { takeEvery } from 'redux-saga/effects';
import {INCREMENT, DEREMENT} from '../../redux/counter' 

function* increment(action) {
    console.log(`SAGA with action: ${JSON.stringify(action)}`);
}

export function* watchIncrement() {
    yield takeEvery(INCREMENT, increment);
}


function* decrement(action) {
    console.log(`SAGA with action: ${JSON.stringify(action)}`);
}

export function* watchDecrement() {
    yield takeEvery(DEREMENT, decrement);
}


