import React, { Component } from 'react';

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }
  
  render() {
    const headerStyle={
        alignContent:'center',
        textAlign:'center'
    };
    return (
      <div className="todoListMain">
        <div className="header" style={headerStyle}>
          <form onSubmit={this.props.addItem}>
            <div ><input
              placeholder="Add Task" 
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            </div>
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList
