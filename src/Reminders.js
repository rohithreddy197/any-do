import React from "react";
import "./Reminders.css";

const reminders = props => {
  return (
    <div className="Reminder">
      <center className="RemindMe">Remind me</center>
      <button
        onClick={props.handleReminder.bind(this, "Today")}
        className="ReminderButton"
      >
        Today
      </button>
      <button
        onClick={props.handleReminder.bind(this, "Tomorrow")}
        className="ReminderButton"
      >
        Tomorrow
      </button>
      <button
        onClick={props.handleReminder.bind(this, "Someday")}
        className="ReminderButton"
      >
        Someday
      </button>
    </div>
  );
};

export default reminders;