import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Table, Container } from 'react-bootstrap';
function Navbars() {
    return (
        <>
            <Navbar className="bg-body-tertiary justify-content-between fixed-top">
                <Container fluid>
                    <Navbar.Brand href="#home" className='fixed'>Pranavam</Navbar.Brand>
                    <Form inline>
                        <Row className="align-items-center">
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbars;
