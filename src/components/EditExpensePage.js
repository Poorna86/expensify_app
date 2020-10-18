import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense,removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }

    onRemove = () => {
        this.props.dispatch(removeExpense({id: this.props.expense.id}));
        this.props.history.push('/')
    }
    render () {
        return (
            <div>
            <ExpenseForm 
                expense = {props.expense}
                onSubmit = {this.onSubmit}
                // onSubmit = {(expense) => {
                //     props.dispatch(editExpense(props.expense.id, expense))
                //     props.history.push('/') //directing to home page
                // } }
            />
            <button 
                onClick={this.onRemove} > Remove
            </button>
            </div>
        );
    };
};

const mapStatetoProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense))    
});


export default connect(mapStatetoProps, mapDispatchToProps)(EditExpensePage);