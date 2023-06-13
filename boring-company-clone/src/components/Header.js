import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import {Row} from 'react-bootstrap'

export const Header = () => {
  return (
    <div className='main'>
    <Navbar bg="" expand="md">
      <Container>
        <Navbar.Brand href="#home">
<img src={logo} alt="logo" width='120px' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link className='text-light fw-bold' href="#home">TUNNELS</Nav.Link>
            <Nav.Link className='text-light fw-bold' href="#link">PROJECTS</Nav.Link>
            <Nav.Link className='text-light fw-bold' href="#link">PRODUCTS</Nav.Link>
            <Nav.Link className='text-light fw-bold' href="#link">PRUFROCK</Nav.Link>
            <Nav.Link className='text-light fw-bold' href="#link">LOOP</Nav.Link>
           
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link className='text-light fw-bold' href="#home">CAREERS</Nav.Link>
            <Nav.Link className='text-light fw-bold' href="#link">FLAMETHROWER</Nav.Link>
            <Nav.Link className='text-light fw-bold' href="#link">BURNT HAIR</Nav.Link>
           
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
<Row className='p-3 d-flex align-items-end'>
    <h5>

    
    The Boring Company creates safe, fast-to-dig, and low-cost transportation, utility, and freight tunnels
    </h5>
    <h5>

The mission: solve traffic, enable rapid point-to-point transportation and transform cities
    </h5>
</Row>

    </div>
  );
}


