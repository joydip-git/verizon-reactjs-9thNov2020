const { createStore, applyMiddleware } = require('redux')
const { createLogger } = require('redux-logger')

//action types
const INCREASE = 'INCREASE'
const DECREASE = 'DECARESE'

//actions/ action creators

const increaseCountActionCreator = (data) => {
    return {
        type: INCREASE,
        data: data
    }
}
const decreaseCountActionCreator = (data) => {
    return {
        type: DECREASE,
        data: data
    }
}

//state
const initialCountState = {
    x: 0,
    count: 0
}

//reducer
const countReducer = (state = initialCountState, action) => {
    let newState = null;
    switch (action.type) {
        case INCREASE:
            newState = {
                ...state,
                count: state.count + action.data
            }
            break;
        case DECREASE:
            newState = {
                ...state,
                count: state.count - action.data
            }
            break;

        default:
            newState = {
                ...state
            }
            break;
    }
    return newState;
}

//middleware
const reduxLogger = createLogger();

//store
const countStore = createStore(countReducer, applyMiddleware(reduxLogger))

//console.log(countStore.getState())
countStore.dispatch(increaseCountActionCreator(10))
//console.log(countStore.getState())
countStore.dispatch(decreaseCountActionCreator(5))
//console.log(countStore.getState())
countStore.dispatch(increaseCountActionCreator(7))
//console.log(countStore.getState())
countStore.dispatch(decreaseCountActionCreator(6))
//console.log(countStore.getState())