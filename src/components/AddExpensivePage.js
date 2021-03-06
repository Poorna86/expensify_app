import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses'

class AddExpensivePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
      };
    render(){
        return(  
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                    // onSubmit={(expense) => {
                    //     props.dispatch(addExpense(expense))
                    //     props.history.push('/')
                    // }}
                />
            </div>
        );
    }
};

//     props.dispatch(addExpense(expense))
// above line replaced with below arrow function//
const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined,mapDispatchToProps) (AddExpensivePage);