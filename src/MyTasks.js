import React, { Component } from "react";
import "./MyTasks.css";
import MyTask from "./MyTask";
class MyTasks extends Component {
  constructor() {
    super();
    this.state = {
      reminder: "",
      toggleTasks: false,
      task:""
    };
    this.addTask=this.addTask.bind(this);
    this.handleInputChange=this.handleInputChange.bind(this);
  }
  handleToggleTask(currentReminder) {
    var toggleTasks = !this.state.toggleTasks;
    var reminder = "";
    if (toggleTasks) {
      reminder = currentReminder;
    }
    this.setState({
      reminder: reminder,
      toggleTasks: toggleTasks
    });
  }
  handleDeleteTask(index) {
    this.props.handleDeleteTask(this.state.reminder, index);
  }

  handleInputChange(event){
    var taskName=event.target.value;
    this.setState(
      {
        task:taskName
      }
    );
  }

  addTask(){
    this.props.addTask(this.state.reminder,this.state.task);

  }

  render() {
    let tasks = { Today: [], Tomorrow: [], Someday: [] };
    let currentReminder = this.state.reminder;
    if (currentReminder !== "" ) {
      tasks[currentReminder] = this.props.tasks[currentReminder];
    }
   
    return (
      <div className="MyTasks">
          <strong>{this.props.list}</strong>
          <div className="Card">
            <div className="Tasks">
              <div onClick={this.handleToggleTask.bind(this, "Today")}>
                Today
              </div>
              <MyTask
                handleDeleteTask={this.handleDeleteTask.bind(this)}
                myTasks={tasks["Today"]}
              />
            </div>
            <div className="Tasks">
              <div onClick={this.handleToggleTask.bind(this, "Tomorrow")}>
                Tomorrow
              </div>
              <MyTask
                handleDeleteTask={this.handleDeleteTask.bind(this)}
                myTasks={tasks["Tomorrow"]}
              />
            </div>
            <div className="Tasks">
              <div onClick={this.handleToggleTask.bind(this, "Someday")}>
                Someday
              </div>
              <MyTask
                handleDeleteTask={this.handleDeleteTask.bind(this)}
                myTasks={tasks["Someday"]}
              />
              
            </div>
            
          </div>
        <div>
        <div className="AddTask">
              <input 
                onChange={this.handleInputChange.bind(this)}
                type="text"
                placeholder="Click to quickly add a task" 
                />
            </div>   
            <div className="AddButton">
               <i class="far fa-arrow-alt-circle-up" onClick={this.addTask}></i>
            </div>
        </div>
        
      </div>
    );
  }
}

export default MyTasks;
