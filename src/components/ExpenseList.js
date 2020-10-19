import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/visibleExpenses';

const ExpenseList = (props) => {
    return (
    <div>
        {
          props.expenses.length === 0 ?
          (<p>No expenses</p>) :
          (props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense}/>;
            })
          ) 
        }
    </div>
)};

//create higher order component
// below HOC filters and sorts the data and send to ExpenseList which we get at the screen 
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
     }
};
export default connect(mapStateToProps) (ExpenseList);