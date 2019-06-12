import React, { Component } from "react";
import CurrentTask from "./CurrentTask";
import "./MyTask.css";
class MyLists extends Component {
  render() {
    let myTasks = "";
    if (this.props.myTasks) {
      myTasks = this.props.myTasks.map((task, i) => {
        return (
          <CurrentTask 
            className="Task"
            key={i}
            handleDeleteTask={this.props.handleDeleteTask.bind(this, i)}
            task={task}
          />
        );
      });
    }
    return <div className="MyLists">{myTasks}</div>;
  }
}
export default MyLists;