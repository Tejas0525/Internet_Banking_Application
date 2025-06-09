import React, { useState, useEffect, useMemo } from 'react';
import {
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Form,
  Button,
  Table,
  Modal,
  Alert,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import { CSVLink } from 'react-csv';


const initialCustomers = [
  {
    id: 1,
    name: 'Ravi Kumar',
    email: 'ravi@gmail.com',
    accountNumber: '123456',
    branch: 'Mumbai',
    status: 'Active',
    dob: '1990-01-01',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'priya@gmail.com',
    accountNumber: '789012',
    branch: 'Dhule',
    status: 'Inactive',
    dob: '1992-05-15',
  },
  {
    id: 3,
    name: 'Anil Singh',
    email: 'anil@example.com',
    accountNumber: '456789',
    branch: 'Sangali',
    status: 'Active',
    dob: '1988-11-20',
  },
  {
  id: 4,
    name: 'Shahi Kumar',
    email: 'shahi@gmail.com',
    accountNumber: '1330456',
    branch: 'Mumbai',
    status: 'Active',
    dob: '2021-01-01',
  },
  {
    id: 5,
    name: 'Priya Patil',
    email: 'priya@gmail.com',
    accountNumber: '6129012',
    branch: 'Pune',
    status: 'Inactive',
    dob: '2024-05-15',
  },
];

const initialTransactions = [
  {
    id: 1,
    accountNumber: '123456',
    date: '2025-06-01',
    type: 'Deposit',
    amount: 5000,
    status: 'Success',
  },
  {
    id: 2,
    accountNumber: '123456',
    date: '2025-06-03',
    type: 'Withdrawal',
    amount: 2000,
    status: 'Success',
  },
  {
    id: 3,
    accountNumber: '1330456',
    date: '2025-06-02',
    type: 'Deposit',
    amount: 10000,
    status: 'Failed',
  },
   {
    id: 3,
    accountNumber: '123456',
    date: '2025-06-01',
    type: 'Deposit',
    amount: 5000,
    status: 'Success',
  },
  {
    id: 4,
    accountNumber: '6129012',
    date: '2025-06-03',
    type: 'Withdrawal',
    amount: 2000,
    status: 'Success',
  },
];

// Utility: Filter and sort customers based on search and sort key
const filterCustomers = (customers, query, sortKey, sortAsc) => {
  let filtered = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.email.toLowerCase().includes(query.toLowerCase()) ||
      c.accountNumber.includes(query) ||
      c.branch.toLowerCase().includes(query.toLowerCase())
  );
  filtered.sort((a, b) => {
    if (!sortKey) return 0;
    if (a[sortKey] < b[sortKey]) return sortAsc ? -1 : 1;
    if (a[sortKey] > b[sortKey]) return sortAsc ? 1 : -1;
    return 0;
  });
  return filtered;
};

const ManagerDashboard = () => {
  // Tabs
  const [activeTab, setActiveTab] = useState('summary');

  // Theme
  const [darkMode, setDarkMode] = useState(false);

  // Customer Data
  const [customers, setCustomers] = useState(initialCustomers);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortKey, setSortKey] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);

  // Selected customer for edit/view
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // Add/Edit modal
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add' or 'edit'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    accountNumber: '',
    branch: '',
    status: 'Active',
    dob: '',
  });

  // Notifications
  const [alerts, setAlerts] = useState([]);

  // Transactions
  const [transactions] = useState(initialTransactions);

  // Customer lookup (autocomplete suggestions)
  const customerSuggestions = useMemo(() => {
    if (!searchQuery) return [];
    return customers.filter((c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.accountNumber.includes(searchQuery)
    );
  }, [searchQuery, customers]);

  // Filtered and sorted customers
  const displayedCustomers = useMemo(
    () => filterCustomers(customers, searchQuery, sortKey, sortAsc),
    [customers, searchQuery, sortKey, sortAsc]
  );

  // Stats for summary
  const totalCustomers = customers.length;
  const activeCustomers = customers.filter((c) => c.status === 'Active').length;
  const inactiveCustomers = totalCustomers - activeCustomers;

  // Handle logout
  const handleLogout = () => {
    // Clear any auth tokens/session here if needed
    window.location.href = '/';
  };

  // Handle sorting click
  const handleSort = (key) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  // Handle form input change
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  // Open Add Customer Modal
  const openAddModal = () => {
    setModalMode('add');
    setFormData({
      name: '',
      email: '',
      accountNumber: '',
      branch: '',
      status: 'Active',
      dob: '',
    });
    setShowModal(true);
  };

  // Open Edit Customer Modal
  const openEditModal = (customer) => {
    setModalMode('edit');
    setSelectedCustomer(customer);
    setFormData({ ...customer });
    setShowModal(true);
  };

  // Save customer (add or edit)
  const handleSaveCustomer = () => {
    const { name, email, accountNumber, branch, status, dob } = formData;
    if (!name || !email || !accountNumber || !branch || !dob) {
      alert('Please fill all fields');
      return;
    }
    if (modalMode === 'add') {
      // Check for duplicate account number or email
      const exists = customers.some(
        (c) =>
          c.accountNumber === accountNumber.toString() || c.email === email.toLowerCase()
      );
      if (exists) {
        alert('Customer with this account number or email already exists');
        return;
      }
      const newCustomer = {
        id: Date.now(),
        ...formData,
        email: email.toLowerCase(),
      };
      setCustomers((prev) => [...prev, newCustomer]);
      setAlerts((a) => [...a, { id: Date.now(), type: 'success', msg: 'Customer added!' }]);
    } else if (modalMode === 'edit') {
      setCustomers((prev) =>
        prev.map((c) => (c.id === selectedCustomer.id ? { ...formData, id: c.id } : c))
      );
      setAlerts((a) => [...a, { id: Date.now(), type: 'info', msg: 'Customer updated!' }]);
    }
    setShowModal(false);
  };

  // Delete customer
  const handleDeleteCustomer = (id) => {
    if (window.confirm('Are you sure to delete this customer?')) {
      setCustomers((prev) => prev.filter((c) => c.id !== id));
      setAlerts((a) => [...a, { id: Date.now(), type: 'danger', msg: 'Customer deleted!' }]);
      if (selectedCustomer && selectedCustomer.id === id) setSelectedCustomer(null);
    }
  };

  // Clear alert
  const handleDismissAlert = (id) => {
    setAlerts((a) => a.filter((alert) => alert.id !== id));
  };

  // Filter transactions for selected customer
  const customerTransactions = useMemo(() => {
    if (!selectedCustomer) return [];
    return transactions.filter((t) => t.accountNumber === selectedCustomer.accountNumber);
  }, [selectedCustomer, transactions]);

  return (
    <Container fluid className={darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} style={{ minHeight: '100vh', paddingBottom: '40px' }}>
  {/* Header */}
  <Row className="align-items-center py-3">
    <Col xs={6}>
      <h1 style={{ 
      fontSize: '2.5rem', 
      fontWeight: '700', 
      fontFamily: 'Segoe UI, sans-serif',
      letterSpacing: '1px',
      color: darkMode ? '#f8f9fa' : '#343a40'
    }}>
      Welcome Manager
    </h1>
    </Col>
    <Col xs={6} className="text-end">
      <Button variant="danger" onClick={handleLogout} style={{ width: '30%' }}>
        Logout
      </Button>
    </Col>
  </Row>


      {/* Alerts */}
      <Row className="mt-3">
        <Col>
          {alerts.map((alert) => (
            <Alert
              key={alert.id}
              variant={alert.type}
              onClose={() => handleDismissAlert(alert.id)}
              dismissible
            >
              {alert.msg}
            </Alert>
          ))}
        </Col>
      </Row>

      {/* Tabs */}
      <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mt-3">
        {/* Summary Tab */}
        <Tab eventKey="summary" title="Summary">
          <Row className="mt-4">
            <Col md={4} sm={6} xs={12} className="mb-3">
              <div className={`p-3 rounded shadow-sm text-center ${darkMode ? 'bg-primary text-white' : 'bg-primary text-white'}`}>
                <h5>Total Customers</h5>
                <h2>{totalCustomers}</h2>
              </div>
            </Col>
            <Col md={4} sm={6} xs={12} className="mb-3">
              <div className={`p-3 rounded shadow-sm text-center ${darkMode ? 'bg-success text-white' : 'bg-success text-white'}`}>
                <h5>Active Accounts</h5>
                <h2>{activeCustomers}</h2>
              </div>
            </Col>
            <Col md={4} sm={6} xs={12} className="mb-3">
              <div className={`p-3 rounded shadow-sm text-center ${darkMode ? 'bg-danger text-white' : 'bg-danger text-white'}`}>
                <h5>Inactive Accounts</h5>
                <h2>{inactiveCustomers}</h2>
              </div>
            </Col>
          </Row>
        </Tab>

        {/* Customer Lookup and List */}
        <Tab eventKey="customers" title="Customers">
          <Row className="mt-4 mb-2">
            <Col md={8} xs={12}>
              <InputGroup>
                <FormControl
                  placeholder="Search by name, email, account #, or branch"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search customers"
                />
                <Button variant="outline-secondary" onClick={() => setSearchQuery(' ')}>
                  Clear
                </Button>
              </InputGroup>
            </Col>
            <Col md={4} xs={12} className="text-end mt-2 mt-md-0">
              <Button variant="success" onClick={openAddModal} style={{ width: '30%' }}>
                + Add Customer
              </Button>
              {' '}
              <CSVLink
                data={customers}
                headers={[
                  { label: 'Name', key: 'name' },
                  { label: 'Email', key: 'email' },
                  { label: 'Account Number', key: 'accountNumber' },
                  { label: 'Branch', key: 'branch' },
                  { label: 'Status', key: 'status' },
                  { label: 'DOB', key: 'dob' },
                ]}
                filename="customers.csv"
                className="btn btn-outline-primary"
                style={{ marginLeft: '8px', width:'30%' }}
              >
                Export CSV
              </CSVLink>
            </Col>
          </Row>

          <Table striped bordered hover responsive className="mt-3">
            <thead>
              <tr>
                <th onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>
                  Name {sortKey === 'name' ? (sortAsc ? '▲' : '▼') : ''}
                </th>
                <th onClick={() => handleSort('email')} style={{ cursor: 'pointer' }}>
                  Email {sortKey === 'email' ? (sortAsc ? '▲' : '▼') : ''}
                </th>
                <th onClick={() => handleSort('accountNumber')} style={{ cursor: 'pointer' }}>
                  Account #
                  {sortKey === 'accountNumber' ? (sortAsc ? '▲' : '▼') : ''}
                </th>
                <th onClick={() => handleSort('branch')} style={{ cursor: 'pointer' }}>
                  Branch {sortKey === 'branch' ? (sortAsc ? '▲' : '▼') : ''}
                </th>
                <th onClick={() => handleSort('status')} style={{ cursor: 'pointer' }}>
                  Status {sortKey === 'status' ? (sortAsc ? '▲' : '▼') : ''}
                </th>
                <th>DOB</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {displayedCustomers.map((customer) => (
                <tr key={customer.id} className={selectedCustomer?.id === customer.id ? (darkMode ? 'table-primary' : 'table-info') : ''}>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.accountNumber}</td>
                  <td>{customer.branch}</td>
                  <td>{customer.status}</td>
                  <td>{customer.dob}</td>
                  <td>
                    <Button
                      size="sm"
                      variant="outline-primary"
                      onClick={() => openEditModal(customer)}
                      className="me-2"
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => handleDeleteCustomer(customer.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
              {displayedCustomers.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center">
                    No customers found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Tab>

        {/* Transactions Tab */}
        <Tab eventKey="transactions" title="Transactions">
          <Row className="mt-4">
            <Col xs={12}>
              {selectedCustomer ? (
                <>
                  <h5>
                    Transactions for <strong>{selectedCustomer.name}</strong> (Account # {selectedCustomer.accountNumber})
                  </h5>
                  <Table striped bordered hover responsive className="mt-3">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customerTransactions.length > 0 ? (
                        customerTransactions.map((t) => (
                          <tr key={t.id}>
                            <td>{t.date}</td>
                            <td>{t.type}</td>
                            <td>₹{t.amount}</td>
                            <td>{t.status}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4" className="text-center">
                            No transactions found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </>
              ) : (
                <Alert variant="info">Select a customer from the Customers tab to view transactions.</Alert>
              )}
            </Col>
          </Row>
        </Tab>
      </Tabs>

      {/* Add/Edit Customer Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalMode === 'add' ? 'Add New Customer' : 'Edit Customer'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="customerName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
              />
            </Form.Group>

            <Form.Group controlId="customerEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
              />
            </Form.Group>

            <Form.Group controlId="customerAccount" className="mb-3">
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter account number"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleFormChange}
                disabled={modalMode === 'edit'}
              />
            </Form.Group>

            <Form.Group controlId="customerBranch" className="mb-3">
              <Form.Label>Branch</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter branch"
                name="branch"
                value={formData.branch}
                onChange={handleFormChange}
              />
            </Form.Group>

            <Form.Group controlId="customerStatus" className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select name="status" value={formData.status} onChange={handleFormChange}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="customerDOB" className="mb-3">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleFormChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveCustomer}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ManagerDashboard;
