import me from './WilliamBW.png';
import './style.css';

import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";

import ProjectPage from './pages/projects.js'
import HomePage from './pages/home.js'
import AboutPage from './pages/about.js'
import Project1 from './pages/project_1.js';

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Project_1 from './pages/project_1.js';




function App() {
  return (
    <>
      {/* includes bootstrap stylesheet*/}
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        />
      </head>

      
      <div className="App">
        <header className="App-header">
          <div class="image-cropper">
            <img src={me} alt="profile pic" width="200" height="300" />
          </div>
        </header>

      {/* includes the navBars*/}
      <MyNavBar/>

      {/*includes the content*/}
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/projects/project1" element={<Project1/>} />
        </Routes>
      </Router>


        
      
      
      
      </div>
    </>

  );
}



function MyNavBar()
{
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return(
  <div>
      <Navbar color='dark' expand='sm' light="true" dark="true" container="md"> 
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/#/about">About</NavLink>
            </NavItem>

            <NavItem>
                <NavLink href="/#/projects">Projects</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="https://scholar.google.com/citations?user=xFWd6ZoAAAAJ&hl=en">
               Scholar
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default App;

