import React, { Component } from "react";
import "./Layout.css";
import MyLists from "./MyLists";
// import menu from "./hamburger.png";
import anydo from "./any-do.jpg";
import zemoso from './zemoso_logo1.png';
import MyTasks from "./MyTasks";
import Modal from "./Modal";

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
      toggleMenu: true,
      toggleTasks: true,
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
  // handleToggleMenu() {
  //   //var toggleMenu = !this.state.toggleMenu;
  //   this.setState({
  //     toggleMenu: false
  //   });
  // }
  handleToggleMenu=()=>{
    let toggleMenu=!this.state.toggleMenu;
    this.setState({
      toggleMenu:toggleMenu
    })
  };

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

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  
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
          <div className="ListHeading "><strong>MY LISTS</strong><br/>All Tasks</div>
          <MyLists
            handleToggleTasks={this.handleToggleTasks.bind(this)}
            myLists={this.state.myLists}
          />
          <input
            className="Input"
            onKeyUp={this.handleAddList.bind(this)}
            placeholder="+ New List"
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
          addTask={this.handleAddTask.bind(this)}
          list={tasks["list"]}
          tasks={tasks["taskDeadLines"]}
          
        />
      );
    }
   
    return (
      <div className="Layout">
        <div className="Layout Top">
        {/* <a href="/"> */}
          <img src={zemoso} alt="zemosologo" className="ZemosoLogo" 
          onClick={()=>alert("clicked")}></img>
                 
        {/* </a> */}
        <div>
          <i class="fas fa-cog fa-2x"></i>
          </div>
         
        <i class="fas fa-bars fa-2x" 
        onClick={this.handleToggleMenu}
        >
        </i> 
          {/* <img
            alt=""
            onClick={this.handleToggleMenu.bind(this)}
            src={menu}
            className="MenuIcon"
          /> */}
          <button className="Button" onClick={this.handleShowModal}>
            + New
          </button>
          <div>
            
          <i class="fas fa-search fa-2x"></i>
          </div>
          {toggleMyLists}
        </div>
        <div className="Layout Content">
          <div className="Block">{toggleMyTasks}</div>
          {/* <img alt="" src={anydo} className="Image" /> */}
          <a href="/">
          {/* <i class="fas fa-tasks fa-10x"></i> */}
          <img 
          src={anydo}
          alt="Any-Do Logo"
          className="AnyDo"
          />
          </a>
          
          <Modal
            handleAddTask={this.handleAddTask.bind(this)}
            show={this.state.showModal}
            closeModal={this.handleCloseModal}
            myLists={this.state.myLists}
            currentList={tasks["list"]}
          />
        </div>
      </div>
    );
  }
}

export default Layout;