
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeToggle from './ThemeToggle';
import { Link } from "react-scroll";


function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-transparent">
      <Container>
        <Navbar.Brand href="#" className='nav'>TRANTIGRAM</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as="a" href="#" className='nav'> 
            <Link to="Features" smooth={true} duration={100} className="nav">
              Features
            </Link>
            </Nav.Link>
            <Nav.Link as="a" href="#" className='nav'>
            <Link to="Translator" smooth={true} duration={100} className="nav">
            Translate
            </Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2}>
              <ThemeToggle />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}



export default Header