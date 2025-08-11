import React, { useState } from 'react';
import '../style.css';

import {
    Button,
    Nav,
    NavLink,
    NavItem,
    TabContent,
    TabPane,
    Row,
    Col,
    Card,
    CardTitle,
    CardText

} from 'reactstrap';

function Project1Page() {
  return (
    <>
        <div>
            <h1>Projects</h1>
            <p>Welcome to my projects. Each project is thought as a small react app that gets me practicing and honing my skills</p>
        </div>

        <MyButton />

        <Nav vertical>
          <NavItem>
            <NavLink href="#">
              Project 1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              Project 2
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              Another Project
            </NavLink>
          </NavItem>
        </Nav>
        
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