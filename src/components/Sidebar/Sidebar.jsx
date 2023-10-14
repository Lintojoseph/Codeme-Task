import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function SideBar() {
    return (
        <Navbar expand="lg" className="fixed-top">
            <Container className='mt-5'>
                <Navbar.Toggle aria-controls="sidebar-nav" />
                <Navbar.Collapse id="sidebar-nav">
                    <Nav className="flex-column">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" className="nav-link">
                                <i className="fas fa-tachometer-alt"></i> Dashboard
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/patient" className="nav-link">
                                <i className="fas fa-user"></i> Patients
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#" className="nav-link">
                                <i className="fas fa-user-md"></i> Physicians
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#" className="nav-link">
                                <i className="fas fa-calendar"></i> Appointments
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#" className="nav-link">
                                <i className="fas fa-id-card"></i> Generate Card
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SideBar;
