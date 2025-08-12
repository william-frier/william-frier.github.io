import React, { useState } from 'react';
import '../style.css';
import Project1 from './project_1';

import {
    Button,
    Nav,
    NavLink,
    NavItem

} from 'reactstrap';

function ProjectPage() {
  return (
    <>
        <div>
            <h1>Projects</h1>
            <p>Welcome to my projects. Each project is thought as a small react app that gets me practicing.</p>
        </div>

        <MyButton />

        <Nav vertical>
          <NavItem>
            <NavLink href="/#/projects/project1">
              Tic-Tac-Toe
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#/">
              Project 2
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#/">
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

export default ProjectPage;