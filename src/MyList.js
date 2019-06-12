import React from "react";
import "./MyList.css";

const myList = props => {
  return (
    <div>
      {/* <div><button className="DelBtn" ><i class="far fa-trash-alt"></i></button></div> */}
    <div>
      <div onClick={props.handleClick} className="MyList">
      {props.myList}
    </div>
    {/* <button className="DelBtn"><i class="far fa-trash-alt"></i></button>  */}
    </div>
    </div>
       
  );
};
export default myList;
