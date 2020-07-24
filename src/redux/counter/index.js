
//ACTION TYPE:
export const INCREMENT = 'INCREMENT';
export const DEREMENT = 'DECREMENT';

//ACTION:
export const increment = () => {
    return {
        type: INCREMENT,
    }
}

export const decrement = () => {
    return {
        type: DEREMENT,
    }
}

//REDUCER:
const initCounter = { value: 0 }

const ReducerCounter = (state = initCounter, action) => {
    // console.log(`state ${JSON.stringify(state)}- action ${JSON.stringify(action)}`)
    switch (action.type) {
        case INCREMENT:
            return {value: ++state.value};
        case DEREMENT:
            return {value: --state.value};
        default:
            return state
    }
}

export default ReducerCounter