import React from "react";
import Message from "./Message";

function Parent() {
  const buttonClick = () => {
    console.log("answer viewed");
  };
  return (
    <div>
      <Message
        question="Name the national animal of INDIA?"
        onbuttonclick={buttonClick}
      />
      <Message
        question="Name the national bird of Bangladesh?"
        onbuttonclick={buttonClick}
      />
    </div>
  );
}
export default Parent;
