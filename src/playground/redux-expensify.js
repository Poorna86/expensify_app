import {createStore, combineReducers} from 'redux';
import { v4 as uuid } from 'uuid';

//combineReducers - used to create multiple small functions and combine them togther
//UUID - Universal unique ID - npm UUID


//ADD_EXPENSE
const addExpense = (
    {description = '', 
    note='', 
    amount=0, 
    createdAt=0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
//REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
    });
//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});
//SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});
//SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

//expense reducer

const expenseReducersDefaultState = [];

const expenseReducer = (state = expenseReducersDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': 
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE': 
            return state.filter(({id}) => {
                return id !== action.id
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }    
                } else {
                    return {
                        ...expense
                    }
                }
            });    
        default:
            return state
    }
};

//filter reducer

const filtersReducersDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined 
};

const filterReducer = (state = filtersReducersDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
};

//get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    
    return expenses.filter((expense) => {
        
        const startDateMatch = typeof startDate != 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate != 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }

    });
}

//store creation

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
    ); 

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description:'rent', amount: 100, createdAt: -1000}));
const expenseTwo = store.dispatch(addExpense({description:'coffee', amount: 300, createdAt: 1000}));
const expenseThree = store.dispatch(addExpense({description:'tea', amount: 400, createdAt: -1000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id,{amount: 500, description: 'coffe'}))

store.dispatch(setTextFilter('E'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(999))
// store.dispatch(setEndDate())

const demoState = {
    expenses: [{
        id: 'hsdjskjf',
        description: 'January rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined 
    }
}