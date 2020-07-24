
//ACTION TYPE:
const INCREMENT = 'INCREMENT';
const DEREMENT = 'DECREMENT';

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
            const {value} = state
            return {value: ++value};
        case DEREMENT:
            const { value } = state
            return {value: --value};
        default:
            return state
    }
}

export default ReducerCounter