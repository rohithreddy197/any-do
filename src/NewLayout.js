import React, { Component } from "react";
import "./Layout.css";
import MyLists from "../../components/MyLists/MyLists";
import menu from "./images/menu-icon.png";
import anydo from "./images/any-do.png";
import MyTasks from "../MyTasks/MyTasks.js";
import Modal from "../Modal/Modal.js";

var tasks = "";
var listIndex = "";
class Layout extends Component {
  constructor() {
    super();
    this.state = {
      myLists: [
        {
          list: "Personal",
          taskDeadLines: { Today: [], Tomorrow: [], Someday: [] }
        },
        {
          list: "Work",
          taskDeadLines: { Today: [], Tomorrow: [], Someday: [] }
        },
        {
          list: "GroceryList",
          taskDeadLines: { Today: [], Tomorrow: [], Someday: [] }
        }
      ],
      toggleMenu: false,
      toggleTasks: false,
      showModal: false
    };
  }
  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleAddList(event) {
    if (event.keyCode === 13) {
      var taskDeadLines = { Today: [], Tomorrow: [], Someday: [] };
      var newListItem = event.target.value;
      if (newListItem !== "") {
        var myLists = this.state.myLists.slice();
        myLists.push({
          list: newListItem,
          taskDeadLines: taskDeadLines
        });
        this.setState({
          myLists: myLists
        });
      }
      event.target.value = "";
    }
  }
  handleToggleMenu() {
    var toggleMenu = !this.state.toggleMenu;
    this.setState({
      toggleMenu: toggleMenu
    });
  }
  handleToggleTasks(list, index) {
    tasks = list;
    listIndex = index;
    var toggleTasks = true;
    this.setState({
      toggleTasks: toggleTasks
    });
  }
  handleAddTask(day, task) {
    this.setState({ showModal: false });
    var myLists = this.state.myLists.slice();
    if (task !== "") {
      if (listIndex === "") {
        myLists[0].taskDeadLines[day].push(task);
      } else {
        myLists[listIndex].taskDeadLines[day].push(task);
      }
    }
    this.setState({
      myLists: myLists
    });
  }
  handleDeleteTask(reminder, index) {
    let myLists = this.state.myLists.slice();
    myLists[listIndex].taskDeadLines[reminder].splice(index, 1);
    this.setState({
      myLists: myLists
    });
  }
  render() {
    let toggleMyLists = <div className="Layout Left Default" />;
    if (this.state.toggleMenu) {
      toggleMyLists = (
        <div className="Layout Left">
          MY LISTS
          <MyLists
            handleToggleTasks={this.handleToggleTasks.bind(this)}
            myLists={this.state.myLists}
          />
          <input
            className="Input"
            onKeyUp={this.handleAddList.bind(this)}
            placeholder="+ New"
          />
        </div>
      );
    }
    let toggleMyTasks = null;
    if (this.state.toggleTasks) {
      toggleMyTasks = (
        <MyTasks
          className="MyTasks"
          handleDeleteTask={this.handleDeleteTask.bind(this)}
          list={tasks["list"]}
          tasks={tasks["taskDeadLines"]}
        />
      );
    }
    return (
      <div className="Layout">
        <div className="Layout Top">
          <img
            alt=""
            onClick={this.handleToggleMenu.bind(this)}
            src={menu}
            className="MenuIcon"
          />
          <button className="Button" onClick={this.handleShowModal}>
            + New
          </button>
          {toggleMyLists}
        </div>
        <div className="Layout Content">
          <div className="Block">{toggleMyTasks}</div>
          <img alt="" src={anydo} className="Image" />
          <Modal
            handleAddTask={this.handleAddTask.bind(this)}
            show={this.state.showModal}
            myLists={this.state.myLists}
            currentList={tasks["list"]}
          />
        </div>
      </div>
    );
  }
}

export default Layout;