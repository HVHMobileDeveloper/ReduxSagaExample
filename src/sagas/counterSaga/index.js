import { takeEvery } from 'redux-saga/effects';
import {INCREMENT, DEREMENT} from '../../redux/counter' 

function* increment() {
    console.log('This is increment saga');
}

export function* watchIncrement() {
    yield takeEvery(INCREMENT, increment)
}


function* decrement() {
    console.log('This is decrement saga');
}

export function* watchDecrement() {
    yield takeEvery(DEREMENT, decrement)
}


