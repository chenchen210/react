import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "antd/dist/antd.css";
import App from './App';
import { HashRouter as Router} from "react-router-dom";
import CustomLink from './containers/CustomLink';
import TodoList from './TodoList';







ReactDOM.render(
    // <Router>
    //     <App />
    // </Router>,
    <TodoList/>,
    document.getElementById('root')
)

