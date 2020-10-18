import React from 'react';
import {BrowserRouter, Route , Switch} from 'react-router-dom';
import AddExpensivePage from '../components/AddExpensivePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

//Link is used to as Href tag in React, by using Link the whole page wont refresh
//Switch is used to as server between the pages
//To display header in all pages define at the starting of JSX
 
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch> 
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensivePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;