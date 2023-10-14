import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Navbars from "../components/Navbar/Navbar";
import Patient from "../components/Patient/Patient";
import "./PatientPage.css"
import SideBar from "../components/Sidebar/Sidebar";

function PatientPage() {
    return (
        <>
            <Navbars />
            <Container className="custom-gap">
                <Row>
                    <Col md={9} className="patie" > {/* Adjust the column size based on your layout */}
                        <Patient />
                    </Col>
                    <Col md={9}>
                        <SideBar />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default PatientPage;
