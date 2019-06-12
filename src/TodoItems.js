import React, { Component } from 'react'

class TodoItems extends Component {
  createTasks = item => {
    return (
      <li key={item.key} onClick={() => this.props.deleteItem(item.key) }>
        {item.text}
      </li>
    )
  }
  render() {
      const listStyle={
          textAlign:'center'
      };
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <div style={listStyle}>{listItems}</div>
  }
}

export default TodoItems
