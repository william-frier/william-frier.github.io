import me from './WilliamBW.png';
import './style.css';

import { HashRouter as Router, Route, Routes} from "react-router-dom";

import ProjectPage from './pages/projects.js'
import HomePage from './pages/home.js'
import AboutPage from './pages/about.js'
import Project1 from './pages/projects/project_1.js';
import Project2 from './pages/projects/project_2.js';
import Project3 from './pages/projects/project_3.js';
import Project4 from './pages/projects/project_4.js';
import Project5 from './pages/projects/project_5.js';
import ArticlePage from './pages/articles.js';

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
            <img src={me} alt="profile pic" width="100" height="150" />
          </div>
        </header>

      {/* includes the navBars*/}
      <MyNavBar/>

      {/*includes the content*/}
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<ArticlePage/>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/projects/project1" element={<Project1/>} />
            <Route path="/projects/project2" element={<Project2/>} />
            <Route path="/projects/project3" element={<Project3/>} />
            <Route path="/projects/project4" element={<Project4/>} />
            <Route path="/projects/project5" element={<Project5/>} />
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
              <NavLink href="/#/articles">Publications</NavLink>              
            </NavItem>

            <NavItem>
                <NavLink href="/#/projects">Projects</NavLink>
            </NavItem>

            {/*
            <NavItem>
              <NavLink href="/#/about">About</NavLink>
            </NavItem>*/}

            <NavItem>
              <NavLink href="https://scholar.google.com/citations?user=xFWd6ZoAAAAJ&hl=en" target="_blank">
               Scholar
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="https://www.linkedin.com/in/williamfrier" target = "_blank">
                Linkedin
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default App;

