import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
          <Navbar bg="primary" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="/">LAYOUTindex</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className='m-auto'>
               <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
            </Nav>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Contact Us</Nav.Link>
            <Nav.Link href="#action2"><Link to='/category'>All Product</Link></Nav.Link>
            <NavDropdown title="Features" id="navbarScrollingDropdown">
              {/* <NavDropdown.Item ><Link to='/category'>Product</Link></NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header