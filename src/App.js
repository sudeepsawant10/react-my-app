import React from 'react';
import logo from './logo.svg';
import './App.css';

const name = <span>Sudeep Sawant</span>

//Creating Without using jsx
const newElement = React.createElement('h6',{className:'newElement'}, 'Text without jsx');

const test = () => {
  alert("Button Clicked!");
}

const voteElegible = (age) => {
  if (age>18) return <span>You are eligeble to vote</span>;
  else return <span>Not eligeble</span>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <h5>{name}</h5>
        {newElement}

        {voteElegible(19)}
        <button onClick={test}>Click to Alert</button>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
