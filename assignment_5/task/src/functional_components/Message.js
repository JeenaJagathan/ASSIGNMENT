import React from "react";
import { useState } from "react";
function Message(props) {
const { question: qn,  onbuttonclick } = props;
  const buttonclicked = () => {
    onbuttonclick();
    setsAns("Tiger is the national animal")
  };
const [sAns, setsAns] = useState(qn);
  return (
    <div>
     
      <h1>{sAns}</h1>
      <button onClick={buttonclicked}>Click Me</button>
    </div>
  );
}

export default Message;
