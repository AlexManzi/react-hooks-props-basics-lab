import React from "react";


function About(props) {
  const bio = props.bio
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio != null && bio != "" &&
        <p>{props.bio}</p>
      }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>Links</h3>
      <a href={props.github}>{props.github}</a>
      <a href={props.linkedin}>{props.linkedin}</a>
    </div>
  );
}

export default About;
