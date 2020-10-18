import { createStore } from 'redux';

//Action generators - functions that return action objects
//Arrow function

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count = 101} = {}) => ({
    type: 'SET',
    count
});

// Reducers
// 1. Reducers are pure functions.
// 2. Never change state or action

const countReducer = (state = {count: 0}, action) => {
//const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        
        case 'INCREMENT':
            //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return{
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state
    }
};
//createStore is tracking the change of the data over time.
//Actions - its an object that gets sent to the store
// subcribe - when it screen changes, subscribe will be called

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

//unsubscribe();

// store.dispatch({
//     type: 'INCREMENT'
// })

// store.dispatch({
//     type: 'RESET'
// })
store.dispatch(resetCount())

// store.dispatch({
//     type: 'DECREMENT'
// })

store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch(decrementCount())

// store.dispatch({
//     type: 'SET',
//     count: 101
// })
store.dispatch(setCount())