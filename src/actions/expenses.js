import database from '../firebase/firebase';

//ADD_EXPENSE

     // below is for actual thing that saves in redux store
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});
    // below is async action responsible to fetch data from firbase
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note='', 
            amount=0, 
            createdAt=0
        } = expenseData;

        const expense = { description, note, amount, createdAt}
        database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

//REMOVE_EXPENSE
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
    });

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {
       return database.ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }))
        })
    }
}
//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates))
        })
    }
}

//SET_EXPENSES
export const setExpenses = () => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    return (dispatch) => {
       return database.ref('expenses').once('value').then((snapShot) => {
            const expenses = []
            
            snapShot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(expenses))
        })
    }
}