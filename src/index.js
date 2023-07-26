import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ClassComponent from "./components/ccomponent/ClassComponent";
import { Header } from "./components/props_example/Header";
import Channel from "./components/state_example/Channel";
import FunctionClick from "./components/FunctionClick";
import StyleSheet from "./components/css_example/StyleSheet";
import Form from "./components/form_example/Form";
import Routing from "./components/routing/Routing";
import LifeCycleA from "./components/lifecycle/LifeCycleA";
import Product from "./components/lifecycle/Product";
import Product2 from "./components/lifecycle/Product2";
import PostList from "./components/axios_liabrary_api_call/PostList";
import PostForm from "./components/form_example/PostForm";
import HookCounter from "./components/hooks/HookCounter";
import UseEffectCounter from "./components/hooks/UseEffectCounter";
import HookObject from "./components/hooks/HookObject";
import HookArray from "./components/hooks/HookArray";
import A from "./components/context_api/A";
import { Signup } from "./components/form_library/Signup";
import TestHeader from "./components/props_example/TestHeader";
import Game from "./components/tictactoe/TicTacToe";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>

  //  </React.StrictMode>

  <React.StrictMode>
    {/* PROPS EXAMPLE */}
    {/* <App /> */}
    {/* <Header name="Anuj" last="Sharma"> */}
    {/* child  */}
    {/* <p>Anuj is good boy</p> */}
    {/* <TestHeader /> */}
    {/* <Header name="Vivek" last="Verma" /> */}
    {/* <Header name="Ajay" /> */}
    {/* <Header /> */}
    {/* <ClassComponent name="rahul" last="gupta" rollNo="40" /> */}
    {/* STATE eg */}
    {/* <Channel /> */}
    {/* <FunctionClick /> */}
    {/* <App /> */}
    {/* <Form /> */}
    {/* <Routing /> */}
    {/* <LifeCycleA /> */}
    {/* <Product /> */}
    {/* <StyleSheet isValue={false} /> */}
    {/* <Product2 /> */}
    {/* <PostList /> */}
    {/* <PostForm /> */}
    {/* HOOKS EXAMPLE */}
    {/* <HookCounter /> */}
    {/* <UseEffectCounter /> */}
    {/* <HookObject /> */}
    {/* <HookArray /> */}
    {/*  */}
    {/* <A /> */}
    {/* <Signup /> */}

    {/* Tictactoe */}
    <Game />
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
