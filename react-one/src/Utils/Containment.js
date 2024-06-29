import React from "react";

function FancyBorder(props) {
  return <div>{props.children}</div>;
}

function Fancy(props) {
    return <div>{props.children}</div>; 
}
function WelcomeDialog() {
  return (
    <div>
      <FancyBorder>
      <h1>Welcome</h1>
      <p>Thank you for visiting our spacecraft!</p>
    </FancyBorder>

    <Fancy>
      <h1>Welcome</h1>
      <p>Thank you for visiting our spacecraft!</p>
    </Fancy>
    </div>
  );
}
export default WelcomeDialog;
