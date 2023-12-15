import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class NavBar extends React.Component {
  render() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">[ Markês Sapucaí ]</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" >
              <Nav.Link href="/whoiam">Sobre mim 💪</Nav.Link>
              <Nav.Link href="#link">Serviços</Nav.Link>
              <NavDropdown title="Trabalhe comigo" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Resolver seu problema com TECH
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Freelancer</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Me mande um e-mail <br/>
                  <strong> marktobusiness113@gmail.com </strong> 
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default NavBar;