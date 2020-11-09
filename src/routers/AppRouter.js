import React from 'react';
import {Router, Route , Switch} from 'react-router-dom';
//import createHistory from 'history/createBrowserHistory';
import createHistory from 'history/createBrowserHistory'
import AddExpensivePage from '../components/AddExpensivePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpPage from './PublicRoute';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

//Link is used to as Href tag in React, by using Link the whole page wont refresh
//Switch is used to as server between the pages
//To display header in all pages define at the starting of JSX

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch> 
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
                <PrivateRoute path="/create" component={AddExpensivePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;