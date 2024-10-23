import React from 'react';
import {Link} from "react-router-dom";
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Link to={'/react-phone-input'}>React Phone Input</Link>
        </div>
    );
};

export default App;
