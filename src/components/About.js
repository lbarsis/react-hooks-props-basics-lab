import React from "react";
import user from "../data/user";

function About(props) {

  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{user.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {props.children}
    </div>
  );
}

export default About;
