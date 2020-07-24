
//ACTION TYPE
export const GET_PROFILE_SUCCESSFUL = 'GET_PROFILE_SUCCESSFUL';
export const GET_PROFILE_ERROR = 'GET_PROFILE_ERROR';
export const FETCHING_PROFILE_DATA = 'FETCHING_PROFILE_DATA';

//ACTION
export const fetchProfileData = () => {
    return {
        type: FETCHING_PROFILE_DATA
    }
}

//REDUCER
const initProfileData = {}
const ReducerProfile = (state = initProfileData, action) => {
    console.log(`REDUCER_PROFILE => state ${JSON.stringify(state)}- action ${JSON.stringify(action)}\n`)
    switch(action.type){
        case GET_PROFILE_SUCCESSFUL:
            return action.data;
        case GET_PROFILE_ERROR:
            return state;
        default:
            return state;
    }
}

export default ReducerProfile;