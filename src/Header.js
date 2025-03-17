
import './App.css'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeToggle from './ThemeToggle';


function Header() {
  return (
<Navbar collapseOnSelect expand="lg" className="bg-transparent">
      <Container>
        <Navbar.Brand href="#home" className='nav'>TRANTIGRAM</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className='nav'>Features</Nav.Link>
            <Nav.Link href="#pricing" className='nav'>Pricing</Nav.Link>
          </Nav>
          <Nav>
            
            <Nav.Link eventKey={2} href="#memes">
            <ThemeToggle />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default Header