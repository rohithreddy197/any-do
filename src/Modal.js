import React ,{Component} from 'react';
import "./Modal.css";
import Reminders from "./Reminders";
var showHideClassName;
class Modal extends Component {
  constructor() {
    super();
    this.state = {
      currentReminder: "Today",
      currentTask: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputTask=this.handleInputTask.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleReminder(day) {
    let currentReminder = day;
    this.setState({
      currentReminder: currentReminder
    });
  }
  handleInputTask(event) {
    var currentTask = event.target.value;
    //console.log(currentTask);
    this.setState({
      currentTask: currentTask
    });
  }
  handleSubmit() {
    var currentTask = this.state.currentTask;
    this.setState({ currentTask: "" });
    this.props.handleAddTask(this.state.currentReminder, currentTask);
  }
  render() {
    if (this.props.show) {
      showHideClassName = "modal display-block";
    } else {
      showHideClassName = "modal display-none";
    }
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {/* <span className="close">&times;</span> */}
          <input
            onChange={this.handleInputTask.bind(this)}
            className="InputTask"
            type="text"
            placeholder="Add a To-Do"
            value={this.state.currentTask}
          />
          <div className="modal-sidebar">
            <div className="SelectList">
              <center>
                <span className="ListStyle"></span>
                <div className="CurrentListName">{this.props.currentList}</div>
              </center>
            </div>
            <Reminders handleReminder={this.handleReminder.bind(this)} />
          </div>
          <div className="modal-footer">
            <button className="AddTask" onClick={this.handleSubmit.bind(this)}>
              <strong>Save</strong>
            </button>
            <span className="Close" onClick={this.props.closeModal}>
            {/* <i class="fas fa-window-close fa-2x"></i> */}
            Cancel
            </span >
          </div>
          
        </section>
      </div>
    );
  }
}

export default Modal;