import React, { Component } from 'react';
import store from './store';
import {add_todo} from './actions/index'
export default class TodoList extends Component {
    constructor(){
        super();
        this.state={
            list:store.getState().list//拿到state对象中的list
        }
        store.subscribe(()=>{
            this.setState({
                list:store.getState().list
            })
        })
    }
    handleAdd=(e)=>{
        if(e.keyCode==13){
            store.dispatch(add_todo(e.target.value));
        }
    }
  render() {
    return (
      <div>
        <input onKeyDown={this.handleAdd} type="text"/><br/>
        <ul>
            {
                this.state.list.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })
            }
        </ul>
      </div>
    )
  }
}
