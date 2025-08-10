import React from "react";
import {
    Button
} from 'reactstrap';

function Project1Page() {
  return (
    <>
        <div>
            <h1>Projects</h1>
            <p>Welcome to my projects. Each project is thought as a small react app that gets me practicing and honing my skills</p>
        </div>

        <MyButton />
    </>
  );
}

function MyButton() {
  function handleClick() {
    alert('Stop pushing my buttons!');
  }

  return (
    <Button onClick={handleClick}>
      I'm a button.
    </Button>
  );
}

export default Project1Page;