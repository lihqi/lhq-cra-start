import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import _ from 'lodash';
// console.log(_.add(1, 3));
// let arr1 = [2, 44, 5];
// let arr2 = [2];
// console.log(_.difference(arr1, arr2));
class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to
                    reload.
                </p>
            </div>
        );
    }
}

export default App;
