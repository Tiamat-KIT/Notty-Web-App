//import { useState } from 'react'
//import logo from './logo.svg'
import  { Navbar,Nav,Row,Col,Card } from 'react-bootstrap';


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
      <Row xs={2} md={2} className="g-2">
        {Array.from({ length: 8 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://thumb.ac-illust.com/6c/6c49457122b22005a8dcacaac54d2c17_t.jpeg" />
            <Card.Body >
            <Card.Title>Card title</Card.Title>
              <Card.Text>
                Event 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
    </div>
  )
}

export default App
