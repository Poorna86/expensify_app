import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import Axios from 'axios';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super (props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState (() => ({description}))
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState (() => ({note}))
    };
    onAmountChange = (e) => {
        const amount = e.target.value
        //below !amount will allow user to remove input amount
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))
        }
    };
    onDateChange = (createdAt)=> {
        //below if statement prevents to remove input date on screen
        if (createdAt) {
            this.setState(()=> ({createdAt}));
        }
    };
    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    };
    onSubmit = (e) => {
        const url = 'http://localhost:3000/create';
        const data = {
            phoneNumber: this.state.amount
        }

        Axios.post(url, data).then((res) => {
            console.log(res)
        }).catch((e) => {
            console.log(e)
        })
        e.preventDefault(); //will not allow page refresh after submit button

        if (!this.state.amount || !this.state.description) {
            this.setState(() => ({error: 'Please provide amount and description!!'}))
        } else {
            this.setState(() => ({error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount , 10) * 100, //convert char format amount into numeric decimal format
                createdAt: this.state.createdAt.valueOf(), // convert date into milliseconds format
                note: this.state.note
            });
        };
    };
    render () {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                      type="text"
                      placeholder="Description"
                      autoFocus
                      value={this.state.description}
                      onChange={this.onDescriptionChange}
                    />
                    <input 
                      type="text"
                      placeholder="Amount"
                      value={this.state.amount}
                      onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                      date={this.state.createdAt} 
                      onDateChange={this.onDateChange}
                      focused={this.state.calendarFocused}
                      onFocusChange={this.onFocusChange}
                      numberOfMonths={1}
                      isOutsideRange={() => false}
                    />
                    <textarea
                      placeholder="Add a note for your expense (optional)"
                      value={this.note}
                      onChange = {this.onNoteChange}
                    />
                    <button>
                        Add Expense
                    </button>
                </form>
            </div>
        )
    }
}