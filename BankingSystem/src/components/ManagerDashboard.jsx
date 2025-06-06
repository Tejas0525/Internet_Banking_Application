import React, { useState } from 'react';
import { Container, Tab, Tabs, Form, Button, Table, InputGroup, FormControl } from 'react-bootstrap';
import './ManagerDashboard.css';

const ManagerDashboard = () => {
  const [key, setKey] = useState('lookup');

  // Customer lookup state
  const [searchQuery, setSearchQuery] = useState('');
  const [customerInfo, setCustomerInfo] = useState(null);

  const handleLogout = () => {
    // Clear session/local storage if needed
    // Redirect to home page (assuming "/")
    window.location.href = '/';
  };

  // Dummy customer data for example
  const customers = [
    {
      name: 'Ravi Kumar',
      email: 'ravi@example.com',
      accountNumber: '123456',
      branch: 'Mumbai',
      status: 'Active',
      dob: '1990-01-01',
    },
    {
      name: 'Priya Sharma',
      email: 'priya@example.com',
      accountNumber: '789012',
      branch: 'Delhi',
      status: 'Inactive',
      dob: '1992-05-15',
    },
  ];

  const handleSearch = () => {
    // Search in customers by email or accountNumber
    const result = customers.find(
      (c) =>
        c.email.toLowerCase() === searchQuery.toLowerCase() ||
        c.accountNumber === searchQuery
    );
    if (result) {
      setCustomerInfo(result);
    } else {
      setCustomerInfo(null);
      alert('No customer found with this email or account number');
    }
  };

  return (
    <>
      <header className="dashboard-header">
        <h1>
          <img src="/bank-logo.png" alt="Bank Logo" />
          Manager Dashboard
        </h1>
        <Button
          size="sm"
          onClick={handleLogout}
          className="logout-button"
          variant="danger"
        >
          Logout
        </Button>
      </header>

      <div className="manager-dashboard-container">
        <div className="manager-dashboard-card">
          <Tabs
            id="manager-dashboard-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="lookup" title="Customer Lookup">
              <Form
                className="d-flex align-items-center justify-content-center mb-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch();
                }}
                style={{ gap: '10px', maxWidth: '500px', margin: '0 auto' }}
              >
                <Form.Control
                  type="text"
                  placeholder="Enter Email or Account Number"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" variant="primary" style={{ whiteSpace: 'nowrap' }}>
                  Search
                </Button>
              </Form>

              {customerInfo && (
                <Table striped bordered hover responsive>
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <td>{customerInfo.name}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{customerInfo.email}</td>
                    </tr>
                    <tr>
                      <th>Account Number</th>
                      <td>{customerInfo.accountNumber}</td>
                    </tr>
                    <tr>
                      <th>Branch</th>
                      <td>{customerInfo.branch}</td>
                    </tr>
                    <tr>
                      <th>Status</th>
                      <td>{customerInfo.status}</td>
                    </tr>
                    <tr>
                      <th>DOB</th>
                      <td>{customerInfo.dob}</td>
                    </tr>
                  </tbody>
                </Table>
              )}
            </Tab>

            {/* Baaki tabs same rahenge, aap apne hisaab se customize kar sakte hain */}
            <Tab eventKey="history" title="Account History">
              {/* Aapka existing history content */}
            </Tab>
            <Tab eventKey="manage" title="Manage Customers">
              {/* Aapka existing manage customers form */}
            </Tab>
            <Tab eventKey="status" title="Account Status">
              {/* Aapka existing account status table */}
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default ManagerDashboard;
