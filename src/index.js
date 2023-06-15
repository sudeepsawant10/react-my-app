import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ClassComponent from './components/ClassComponent';
import { Header } from './components/Header';
import Channel  from './components/Channel';
import FunctionClick from './components/FunctionClick';
import StyleSheet from './components/StyleSheet';
import Form from './components/Form';
import Routing from './components/Routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  // <React.StrictMode>
    
  //   <App />
  //   <Header name="Anuj" last="Sharma" >
  //     {/* child  */}
  //     <p>Anuj is good boy</p>

  //   </Header>
  //   <Header name="Vivek" last="Verma"/>
  //   <Header name="Ajay" />
  //   <Header />

  //   <ClassComponent name="rahul" last="gupta" rollNo="40"/>

  //   {/* state eg */}
  //   <Channel />

  //   <FunctionClick />
    
  // </React.StrictMode>
  <React.StrictMode>
    {/* <Form /> */}
    <Routing />
    {/* <StyleSheet isValue = {false}/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
