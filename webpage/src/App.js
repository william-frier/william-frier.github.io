import me from './WilliamBW.png';
import './App.css';
import React, { useState } from 'react';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
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
            <img src={me} alt="profile pic" width="200" height="300" />
          </div>
        </header>

      {/* includes the navBars*/}
      <MyNavBar/>

        <h1>
          Hello!
        </h1>


        <div className="App-body" id="Intro">
          <p>
            Trying to learn web development.
          </p>
        </div>
      </div>
      
      <MyButton />
      
    </>

  );
}

function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <Button onClick={handleClick}>
      I'm a button
    </Button>
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
              <NavLink href="/components/">About</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Projects
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Projects
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>A personal Website</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default App;

