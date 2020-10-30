import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

//display expenses list to the screen
const ExpenseListItem = ( {id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
            {numeral(amount).format('00.00')} 
            - 
            {moment(createdAt).format('DD MMM YYYY')}
        </p>
    </div>
);

export default ExpenseListItem;