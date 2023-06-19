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
import LifeCycleA from './components/LifeCycleA';
import Product from './components/Product';
import Product2 from './components/Product2';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import HookCounter from './components/hooks/HookCounter';
import UseEffectCounter from './components/hooks/UseEffectCounter';
import HookObject from './components/hooks/HookObject';
import HookArray from './components/hooks/HookArray';
import A from './components/context_api/A';

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
    {/*
      <Form /> 
     <Routing /> 
     <LifeCycleA /> 
      <Product />
     <StyleSheet isValue = {false}/> 
    */}
     
    {/* <Product2 /> */}
    {/* <PostList /> */}
    {/* <PostForm /> */}
    {/* <HookCounter /> */}
    {/* <UseEffectCounter /> */}
    {/* <HookObject /> */}
    {/* <HookArray /> */}
    {/* <A /> */}
  </React.StrictMode>
);

// ReactDOM.render(
//   <>
//   <PostList />
//   </>,
//   document.getElementById('root')
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
