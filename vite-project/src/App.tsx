//import { useState } from 'react'
//import logo from './logo.svg'
import  { Navbar,Container, Nav, NavDropdown } from 'react-bootstrap';


function App() {
  
  return (
    <div>
      <Navbar bg="warning" expand="md" color='yellow-400'>
        <Navbar.Toggle className='me-auto'/>
        <Navbar.Brand href="#home" className='me-auto'><b>イベント一覧</b></Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          
      </Navbar>
    </div>
  )
}

export default App
