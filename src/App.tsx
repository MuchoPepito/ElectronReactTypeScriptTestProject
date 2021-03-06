import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br />
          <MyMessage message="test5" />
          <MyMessage message="test4" />
          <MyMessage message="test3" />
        </header>
      </div>
    );
  }
}

const MyMessage = (props: {message: string}) => {
  return <div>my message is : {props.message}</div>
}

export default App;
