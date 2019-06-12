/*
import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoItems from './TodoItems'
import './App.css'

class App extends Component {
  
  inputElement = React.createRef()
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
      }
    }
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  updateItem=key=>{
      const toBeUpdated = this.state.items.filter(item => {
        return item.key===key
      })
      
  }

  render() {
    // const p={
    //   textAlign:'center',
    //   color:'blue',
    //   fontFamily:'sanserif'
    // };
    return (
      <div className="App">
      <h1 style={p}>Any-Do</h1>
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    )
  }
}



export default App
*/

import React, { Component } from "react";
import Layout from "../src/Layout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}

export default App;