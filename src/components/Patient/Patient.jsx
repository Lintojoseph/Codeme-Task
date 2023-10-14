import React, { useState, useEffect } from "react";
import { Table, Container, Spinner, Alert } from 'react-bootstrap';

function Patient() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://pranavam-api.foxa.in/api/v2/patient/patients/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        setPatients(data.success ? data.data : []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  // Ensure that patients is an array before trying to map over it
  const patientList = Array.isArray(patients) ? patients : [];

  return (
    <Container>
      <div className="table-responsive">
        {loading && <Spinner animation="border" role="status" />}
        {error && <Alert variant="danger">{error}</Alert>}
        {!loading && !error && (
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Name</th>
                <th>Register Date</th>
                <th>Last Visit</th>
                <th>File Number</th>
              </tr>
            </thead>
            <tbody>
            {patients.map(patient => (
  <tr key={patient.id}>
    <td>{patient.medical_record.file_no}</td>
    <td>{patient.full_name}</td>
    <td>{patient.medical_record.admission_date}</td>
    <td>{patient.medical_record.updated_at}</td>
    <td>{patient.medical_record.file_no}</td>
  </tr>
))}


            </tbody>
          </Table>
        )}
      </div>
    </Container>
  );
}

export default Patient;
