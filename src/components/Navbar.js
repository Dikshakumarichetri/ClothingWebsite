
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SvgImage from '../icons/icon';
import { LinkContainer } from 'react-router-bootstrap'
import Home from './home/home';
import "../components/card/style.css";
function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Clothing Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <LinkContainer to="/">
                            <Nav.Link className="navFonts" to={Home}>Home</Nav.Link>
                        </LinkContainer>
                        <NavDropdown className="navFonts" title="Gender" id="collasible-nav-dropdown">
                            <LinkContainer to="/womencard">

                                <NavDropdown.Item className="navFonts"  ><SvgImage name="WomenIcon" />  Women</NavDropdown.Item></LinkContainer>
                            <LinkContainer to="/mencard">

                                <NavDropdown.Item className="navFonts" > <SvgImage name="MenIcon" />  Men</NavDropdown.Item></LinkContainer>

                        </NavDropdown>
                        <LinkContainer to="/contact">

                            <Nav.Link className="navFonts" href="#deets">Contact </Nav.Link></LinkContainer>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;