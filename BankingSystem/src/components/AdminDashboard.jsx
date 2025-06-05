import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';

const AdminDashboard = () => {
  return (
    <Container fluid className="p-3 bg-light" style={{ minHeight: '100vh' }}>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="bg-dark text-white p-3" style={{ minHeight: '100vh' }}>
          <h4 className="text-center mb-4">Admin Panel</h4>
          <ListGroup variant="flush">
            <ListGroup.Item className="bg-dark text-white border-0">Dashboard</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white border-0">Add/Remove Manager</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white border-0">Manage Banks</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white border-0">Manage Customers</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white border-0">Transactions</ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Main Content */}
        <Col md={9} className="main-content">
          <h2 className="dashboard-title">Welcome, Admin</h2>

          {/* Summary Cards */}
          <Row className="mb-4">
            <Col md={3}>
              <Card bg="warning" text="white">
                <Card.Body>
                  <Card.Title>Total Banks</Card.Title>
                  <Card.Text>10</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card bg="primary" text="white">
                <Card.Body>
                  <Card.Title>Total Managers</Card.Title>
                  <Card.Text>5</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card bg="success" text="white">
                <Card.Body>
                  <Card.Title>Total Customers</Card.Title>
                  <Card.Text>120</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card bg="info" text="white">
                <Card.Body>
                  <Card.Title>Total Transactions</Card.Title>
                  <Card.Text>230</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Add/Remove Manager */}
          <Card className="mb-3">
            <Card.Header>Add / Remove Manager</Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h5>Add Manager</h5>
                  <form>
                    <input type="text" className="form-control mb-2" placeholder="Manager Name" />
                    <input type="email" className="form-control mb-2" placeholder="Email" />
                    <input type="text" className="form-control mb-2" placeholder="Bank Name" />
                    <input type="password" className="form-control mb-2" placeholder="Password" />
                    <Button variant="primary">Add Manager</Button>
                  </form>
                </Col>
                <Col md={6}>
                  <h5>Remove Manager</h5>
                  <form>
                    <input type="email" className="form-control mb-2" placeholder="Manager Email" />
                    <Button variant="danger">Remove Manager</Button>
                  </form>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* Manage Bank Section */}
          <Card className="mb-3">
            <Card.Header>Manage Bank</Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h5>Add / Update Bank</h5>
                  <form>
                    <input type="text" className="form-control mb-2" placeholder="Bank Name" />
                    <input type="text" className="form-control mb-2" placeholder="Branch Address" />
                    <input type="text" className="form-control mb-2" placeholder="Manager Name" />
                    <input type="text" className="form-control mb-2" placeholder="IFSC Code" />
                    <input type="text" className="form-control mb-2" placeholder="Contact Number" />
                    <Button variant="success" className="me-2">Add / Update Bank</Button>
                  </form>
                </Col>
                <Col md={6}>
                  <h5>Delete Bank</h5>
                  <form>
                    <input type="text" className="form-control mb-2" placeholder="Bank Name or IFSC" />
                    <Button variant="danger">Delete Bank</Button>
                  </form>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* Customer Table */}
          <Card className="mb-3">
            <Card.Header>Customer Details</Card.Header>
            <Card.Body>
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Account Number</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ravi Kumar</td>
                    <td>ravi@example.com</td>
                    <td>1234567890</td>
                    <td><span className="text-success">Active</span></td>
                    <td><Button variant="danger" size="sm">Deactivate</Button></td>
                  </tr>
                  <tr>
                    <td>Priya Sharma</td>
                    <td>priya@example.com</td>
                    <td>9876543210</td>
                    <td><span className="text-danger">Inactive</span></td>
                    <td><Button variant="success" size="sm">Activate</Button></td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
          </Card>

          {/* Transactions Section */}
          <Card>
            <Card.Header>Recent Transactions</Card.Header>
            <Card.Body>
              <ul>
                <li>Transaction #001 - ₹5000 - Success</li>
                <li>Transaction #002 - ₹12000 - Success</li>
                <li>Transaction #003 - ₹300 - Failed</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
