import React from "react";
import MyList from "./MyList";
const myLists = props => {
  let myList = "";
  if (props.myLists) {
    myList = props.myLists.map((list, i) => {
      return (
        <MyList
          key={i}
          handleClick={props.handleToggleTasks.bind(this, list, i)}
          myList={list["list"]}
        />
      );
    });
  }
  return <div className="MyLists">{myList}</div>;
};

export default myLists;