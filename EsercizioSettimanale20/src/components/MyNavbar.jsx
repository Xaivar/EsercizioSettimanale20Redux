import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-black">
      <Container>
        <Navbar.Brand href="/" className='text-white fs-3 testo-nav'></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='text-white fs-3 testo-nav ms-5'>Search</Nav.Link>
            <Nav.Link href="/aboutpage" className='text-white fs-3 testo-nav ms-5'>About</Nav.Link>
            <Nav.Link href="/users" className='text-white fs-3 testo-nav ms-5'>Users</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
      </Form>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;