import { Navbar, Nav, Container } from 'react-bootstrap';
const TopMenu = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>Rapid AID</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-md-auto'>
            <Nav.Link href='#features'>Tasks</Nav.Link>
            <Nav.Link href='#pricing'>Post Task</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopMenu;
