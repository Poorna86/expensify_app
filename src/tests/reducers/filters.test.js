import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values',() => {
    const state = filterReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',       
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sort by amount',() => {
    const state = filterReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should set sort by date',() => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    } 
    const action = {type: 'SORT_BY_DATE'}
    const state = filterReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

test('should set sort by text',() => {
    const text = 'this is my filter'
    const action = {type: 'SET_TEXT_FILTER', text}
    const state = filterReducer(undefined, action)
    expect(state.text).toBe(text)
});

test('should set sort by start date',() => {
    const startDate = moment(0).startOf('month')
    const action = {type: 'SET_START_DATE', startDate}
    const state = filterReducer(undefined, action)
    expect(state.startDate).toEqual(startDate)
});

test('should set sort by end date',() => {
    const endDate = moment(0).endOf('month')
    const action = {type: 'SET_END_DATE', endDate}
    const state = filterReducer(undefined, action)
    expect(state.endDate).toEqual(endDate)
});