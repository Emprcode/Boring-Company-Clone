import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import {Row} from 'react-bootstrap'

export const Header = () => {
  return (

    <Navbar bg="" expand="md">
      <Container>
        <Navbar.Brand href="/">
<img src={logo} alt="logo" width='120px' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto fw-bold">
            <Nav.Link className='text-light ' href="#home">TUNNELS</Nav.Link>
            <Nav.Link className='text-light' href="#link">PROJECTS</Nav.Link>
            <Nav.Link className='text-light' href="#link">PRODUCTS</Nav.Link>
            <Nav.Link className='text-light' href="#link">PRUFROCK</Nav.Link>
            <Nav.Link className='text-light' href="#link">LOOP</Nav.Link>
           
          </Nav>
          <Nav className="ms-auto fw-bold">
            <Nav.Link className='text-light' href="#home">CAREERS</Nav.Link>
            <Nav.Link className='text-light' href="#link">FLAMETHROWER</Nav.Link>
            <Nav.Link className='text-light' href="#link">BURNT HAIR</Nav.Link>
           
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>

   
  );
}


