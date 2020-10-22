import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/visibleExpenses';
import selectExpensesTotal from '../selectors/ExpensesTotal';

const expensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formatedExpensesTotal = numeral(expensesTotal/100).format('00.00');
    return(
        <div>
            <h1> Viewing {expenseCount} {expenseWord} totalling {formatedExpensesTotal}</h1>
        </div>
    )
};

const mapStateToprops = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToprops) (expensesSummary);