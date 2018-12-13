import * as React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore , applyMiddleware, compose} from 'redux';
import rootReducer from './rootReducer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from "redux-thunk";
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const store = createStore(rootReducer,  compose(applyMiddleware(thunk) ));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App name={'123'} />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
