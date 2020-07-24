import {GET_PROFILE_ERROR, GET_PROFILE_SUCCESSFUL, FETCHING_PROFILE_DATA} from '../../redux/profileInfo';
import { put, takeEvery } from 'redux-saga/effects';

import {GET_PROFILE_API} from '../../api'

function* fetchProfile(action) {
    console.log(`SAGA with action: ${JSON.stringify(action)}`);
    try {
        const data = yield GET_PROFILE_API();
        //put: dispatch
        yield put({type: GET_PROFILE_SUCCESSFUL, data})
    } catch (error) {
        yield put({type: GET_PROFILE_ERROR})
    }
}

function* profileSaga () {
    yield takeEvery(FETCHING_PROFILE_DATA, fetchProfile);
}

export default profileSaga;