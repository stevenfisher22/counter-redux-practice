import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import Counter from './components/Counter';

// Redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const initialState = {
    count: 0
}

function reducer(state = initialState, action) {
    // console.log('reducer', state, action);
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET': 
            return {
                count: 0
            };
        default: 
            return state;
    }
}

const store = createStore(
    reducer,
    applyMiddleware(thunk)
    );

const App = () => {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))