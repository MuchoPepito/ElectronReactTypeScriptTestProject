import React, { Component } from 'react';
import './Style.css';
import StopWatch from './StopWatch'

class App extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout">
        <main className="mdl-layout__content mld-item--centered">
        <div className="mdl-grid">
          <StopWatch />
        </div>
        </main>
      </div>
    )
  }
}

const MyMessage = (props: { message: string }) => {
  return <div>my message is : {props.message}</div>
}

export default App;
