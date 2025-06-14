import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const AdminDashboard = () => {
  // Banks state
   const [sidebarOpen, setSidebarOpen] = useState(true);
  

   const navigate = useNavigate();
    const handleLogout = () => {
    // localStorage.clear(); // Uncomment if you're using tokens
    navigate('/'); // Redirect to home page
  };
const [selectedMenu, setSelectedMenu] = useState('dashboard');

const [transactions, setTransactions] = useState([
  { AccountNo: 1234567, customerName: 'Ravi Kumar', Bank: 'State Bank', amount: 5000, receiverAccount: 'Priya Sharma - HDFC Bank', dateTime: '2024-06-08 10:45 AM', status: 'Success' },
  { AccountNo: 2345678, customerName: 'Priya Sharma', Bank: 'HDFC Bank', amount: 12000, receiverAccount: 'Ravi Kumar - State Bank', dateTime: '2022-06-07 02:30 PM', status: 'Success' },
  { AccountNo: 3456789, customerName: 'Ravi Kumar', Bank: 'ICICI Bank', amount: 300, receiverAccount: 'Sonal Patil - Axis Bank', dateTime: '2025-06-06 11:15 AM', status: 'Failed' },
  { AccountNo: 4567890, customerName: 'Priya Sharma', Bank: 'Union Bank', amount: 20000, receiverAccount: 'Ravi Mehata - State Bank', dateTime: '2025-02-07 02:30 PM', status: 'Success' },
  { AccountNo: 3450789, customerName: 'Navin Kumar', Bank: 'RBI Bank', amount: 3000, receiverAccount: 'Sonal Kale - Axis Bank', dateTime: '20254-012-06 11:15 AM', status: 'Failed' },

]);

const [searchName, setSearchName] = useState('');



  const [banks, setBanks] = useState([
    { id: 1, name: 'State Bank', branch: 'Mumbai', manager: 'Rahul', ifsc: 'SBIN0001', contact: '9876543210' },
  ]);
  // Bank form state
  const [bankForm, setBankForm] = useState({
    id: null,
    name: '',
    branch: '',
    manager: '',
    ifsc: '',
    contact: '',
  });
  const [isBankEditing, setIsBankEditing] = useState(false);

  // Managers state
  const [managers, setManagers] = useState([
    { id: 1, name: 'Rahul', email: 'rahul@example.com', bank: 'State Bank', password: '*****' },
  ]);
  // Manager add form state
  const [managerForm, setManagerForm] = useState({
    name: '',
    email: '',
    bank: '',
    password: '',
  });
  // Remove manager email
  const [removeManagerEmail, setRemoveManagerEmail] = useState('');

  // Customers state
  const [customers, setCustomers] = useState([
    { id:1, name: 'Ravi Kumar', email: 'ravi@gmail.com', accountNumber: '1234567890', bank:'State Bank', active: true },
    { id:2, name: 'Priya Sharma', email: 'priya@email.com', accountNumber: '9876543210', bank:'HDFC Bank', active: false },
    { id:3, name: 'Suraj Kumar', email: 'suraj@gmail.com', accountNumber: '1234087890', bank:'Union Bank', active: true },
    { id:4, name: 'Priya Rane', email: 'priya@gmail.com', accountNumber: '3476543210', bank:'HDFC Bank', active: false },
  ]);

  const scrollToTransactions = () => {
  const element = document.getElementById('transactionsSection');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
  // ----------- BANK FUNCTIONS ------------

  const handleBankChange = (e) => {
    setBankForm({ ...bankForm, [e.target.name]: e.target.value });
  };

  const handleBankSubmit = (e) => {
    e.preventDefault();
    if (!bankForm.name || !bankForm.ifsc) {
      alert('Bank Name and IFSC are required');
      return;
    }

    if (isBankEditing) {
      // Update bank
      setBanks(
        banks.map((b) => (b.id === bankForm.id ? bankForm : b))
      );
      setIsBankEditing(false);
    } else {
      // Add new bank
      setBanks([...banks, { ...bankForm, id: Date.now() }]);
    }

    setBankForm({ id: null, name: '', branch: '', manager: '', ifsc: '', contact: '' });
  };

  const handleBankEdit = (bank) => {
    setBankForm(bank);
    setIsBankEditing(true);
  };

  const handleBankDelete = (id) => {
    if (window.confirm('Are you sure to delete this bank?')) {
      setBanks(banks.filter((b) => b.id !== id));
    }
  };

  // ----------- MANAGER FUNCTIONS ------------

  const handleManagerFormChange = (e) => {
    setManagerForm({ ...managerForm, [e.target.name]: e.target.value });
  };

  const handleAddManager = (e) => {
    e.preventDefault();
    if (!managerForm.name || !managerForm.email) {
      alert('Manager Name and Email are required');
      return;
    }
    setManagers([...managers, { ...managerForm, id: Date.now() }]);
    setManagerForm({ name: '', email: '', bank: '', password: '' });
  };

  const handleRemoveManager = (e) => {
    e.preventDefault();
    if (!removeManagerEmail) {
      alert('Enter manager email to remove');
      return;
    }
    if (window.confirm(`Are you sure to remove manager with email ${removeManagerEmail}?`)) {
      setManagers(managers.filter(m => m.email !== removeManagerEmail));
      setRemoveManagerEmail('');
    }
  };

  // ----------- CUSTOMER FUNCTIONS ------------

  const toggleCustomerStatus = (id) => {
    setCustomers(customers.map(c => c.id === id ? {...c, active: !c.active} : c));
  };

  // ----------- RENDER ------------

  return (
    <Container fluid className="p-3 bg-light" style={{ minHeight: '100vh' }}>
      <Row>
        {/* Sidebar */}
        <Col md={2} className="bg-dark text-white p-3" style={{ minHeight: '100vh' }}>
          <h4 className="text-center mb-4">Admin Panel</h4>
          <ListGroup variant="flush">
            <ListGroup.Item className="bg-dark text-white border-0"
            onClick={() => setSelectedMenu('manageBanks')}
            style={{ cursor: 'pointer' }}
            >Manage Banks</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white border-0"
            onClick={() => setSelectedMenu('manageManagers')}
            style={{ cursor: 'pointer' }}
            >Manage Manager</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white border-0"
            onClick={() => setSelectedMenu('manageCustomers')}
            style={{ cursor: 'pointer' }}
            >Manage Customers</ListGroup.Item>
           <ListGroup.Item className="bg-dark text-white border-0"
            onClick={()=>setSelectedMenu('transactions')}
            style={{ cursor: 'pointer' }}
           >Transactions</ListGroup.Item>
           <ListGroup.Item className="bg-dark text-white border-0" 
           onClick={handleLogout} 
              style={{ cursor: 'pointer' }}
              >Logout</ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Main Content */}
        <Col md={10} className="main-content">
          <h2 className="dashboard-title">Welcome Admin</h2>

          {/* Summary Cards */}
          <Row className="mb-4">
            <Col md={3}>
              <Card bg="warning" text="white">
                <Card.Body>
                  <Card.Title>Total Banks</Card.Title>
                  <Card.Text>{banks.length}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card bg="primary" text="white">
                <Card.Body>
                  <Card.Title>Total Managers</Card.Title>
                  <Card.Text>{managers.length}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card bg="success" text="white">
                <Card.Body>
                  <Card.Title>Total Customers</Card.Title>
                  <Card.Text>{customers.length}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card bg="info" text="white">
                <Card.Body>
                  <Card.Title>Total Transactions</Card.Title>
                  <Card.Text>5</Card.Text> {/* Hardcoded */}
                </Card.Body>
              </Card>
            </Col>
          </Row>

                    {/* Manage Bank Section */}
          <Card className="mb-3">
            <Card.Header>Manage Bank</Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h5>{isBankEditing ? 'Update Bank' : 'Add Bank'}</h5>
                  <form onSubmit={handleBankSubmit}>
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Bank Name"
                      name="name"
                      value={bankForm.name}
                      onChange={handleBankChange}
                    />
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Branch Address"
                      name="branch"
                      value={bankForm.branch}
                      onChange={handleBankChange}
                    />
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Manager Name"
                      name="manager"
                      value={bankForm.manager}
                      onChange={handleBankChange}
                    />
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="IFSC Code"
                      name="ifsc"
                      value={bankForm.ifsc}
                      onChange={handleBankChange}
                    />
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Contact Number"
                      name="contact"
                      value={bankForm.contact}
                      onChange={handleBankChange}
                    />
                    <Button variant="success" type="submit" className="me-2">
                      {isBankEditing ? 'Update Bank' : 'Add Bank'}
                    </Button>
                    {isBankEditing && (
                      <Button
                        variant="secondary"
                        onClick={() => {
                          setIsBankEditing(false);
                          setBankForm({ id: null, name: '', branch: '', manager: '', ifsc: '', contact: '' });
                        }}
                      >
                        Cancel
                      </Button>
                    )}
                  </form>
                </Col>
                <Col md={6}>
                  <h5>Existing Banks</h5>
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Branch</th>
                        <th>Manager</th>
                        <th>IFSC</th>
                        <th>Contact</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {banks.map((bank) => (
                        <tr key={bank.id}>
                          <td>{bank.name}</td>
                          <td>{bank.branch}</td>
                          <td>{bank.manager}</td>
                          <td>{bank.ifsc}</td>
                          <td>{bank.contact}</td>
                          <td>
                            <Button variant="warning" size="sm" className="me-2" onClick={() => handleBankEdit(bank)}>
                              Edit
                            </Button>
                            <Button variant="danger" size="sm" onClick={() => handleBankDelete(bank.id)}>
                              Delete
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* Manager */}
          <Card className="mb-3">
            <Card.Header>Manage Manager</Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h5>Add Manager</h5>
                  <form onSubmit={handleAddManager}>
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Manager Name"
                      name="name"
                      value={managerForm.name}
                      onChange={handleManagerFormChange}
                    />
                    <input
                      type="email"
                      className="form-control mb-2"
                      placeholder="Email"
                      name="email"
                      value={managerForm.email}
                      onChange={handleManagerFormChange}
                    />
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Bank Name"
                      name="bank"
                      value={managerForm.bank}
                      onChange={handleManagerFormChange}
                    />
                    <input
                      type="password"
                      className="form-control mb-2"
                      placeholder="Password"
                      name="password"
                      value={managerForm.password}
                      onChange={handleManagerFormChange}
                    />
                    <Button variant="primary" type="submit">Add Manager</Button>
                  </form>
                </Col>
                <Col md={6}>
                  <h5>Remove Manager</h5>
                  <form onSubmit={handleRemoveManager}>
                    <input
                      type="email"
                      className="form-control mb-2"
                      placeholder="Manager Email"
                      value={removeManagerEmail}
                      onChange={(e) => setRemoveManagerEmail(e.target.value)}
                    />
                    <Button variant="danger" type="submit">Remove Manager</Button>
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
                    <th>Bank</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer.id}>
                      <td>{customer.name}</td>
                      <td>{customer.email}</td>
                      <td>{customer.accountNumber}</td>
                      <td>{customer.bank}</td>
                      <td>
                        {customer.active ? (
                          <span className="text-success">Active</span>
                        ) : (
                          <span className="text-danger">Inactive</span>
                        )}
                      </td>
                      <td>
                        <Button
                          variant={customer.active ? 'danger' : 'success'}
                          size="sm"
                          onClick={() => toggleCustomerStatus(customer.id)}
                        >
                          {customer.active ? 'Deactivate' : 'Activate'}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card.Body>
          </Card>

          {/* Transactions Section */}
          {selectedMenu === 'transactions' && (
  <div id="transactionsSection" className="p-3" style={{ width: '100%' }}>
    <Card>
      <Card.Header>Customer Transactions</Card.Header>
      <Card.Body>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search by Customer Name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Bank</th>
              <th>Amount</th>
              <th>Receiver</th>
              <th>Date & Time</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {transactions
              .filter((txn) =>
                txn.customerName
                  .toLowerCase()
                  .includes(searchName.toLowerCase())
              )
              .map((txn) => (
                <tr key={txn.AccountNo}>
                  <td>{txn.customerName}</td>
                  <td>{txn.Bank}</td>
                  <td>₹{txn.amount}</td>
                  <td>{txn.receiverAccount}</td>
                  <td>{txn.dateTime}</td>
                  <td>{txn.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </Card.Body>
    </Card>
  </div>
)}

        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
