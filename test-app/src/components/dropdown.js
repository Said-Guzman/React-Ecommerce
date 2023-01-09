import Dropdown from 'react-bootstrap/Dropdown';

function Drop() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       Menu
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href='http://localhost:3000' className="nav-link">Home</Dropdown.Item>
        <br />
        <Dropdown.Item href='http://localhost:3000/product' className="nav-link">Product</Dropdown.Item>
        <br />
        <Dropdown.Item href='http://localhost:3000/contact' className="nav-link">Contact Us</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Drop;

