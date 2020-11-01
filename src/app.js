import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading........</p>, document.getElementById('app'))

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'))
})

//  -------- Learn below concepts -------- 
//        1. BrowserRouter
//        2. Route
//        3. Switch - Switch is used to as server between the pages
//        4. Link - Link is used to as Href tag in React, by using Link the whole page wont refresh
//        5. NavLink 
//        6. exact in NavLink and Route
//        7. stateless functional component
//        8. React - used to define JSX
//        9. react redux
//       10. HOC (higher order components)
//       11. Action generators
//             --> component calls action generator
//             --> action generator returns object
//             --> component dispatches object
//             --> redux store changes
//       12. Firebase in redux 
//             --> component calls action generator
//             --> action generator returns function
//             --> component dispatches function(?) - redux-thunk middleware uses to dispatch.
//             --> function runs (has the ability to dispatch other actions and do whatever it wants)
//       13. middleware to support firebase
//             --> redux-thunk and compose 


// Higher Order Components (HOC) - A component (HOC) that renders another component (regular component)
// uses of higer order component
//      1. Reuse code
//      2. Render hijacking
//      3. Prop manipulation
//      4. Abstract state

// Provider - Provider will store all of the components that will make up our application.
//            we no need to pass Store manually pass Store around.

// Connect - connect import will connect your redux to the store.
//



  // yarn install --production for prod dependicies
// yarn install for development dependicies