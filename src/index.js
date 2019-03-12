import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Counter from './components/Counter';

function Test() {
    return (
        <>
            <Counter />
        </>
    )
}

ReactDOM.render(<Test />, document.getElementById('root'))