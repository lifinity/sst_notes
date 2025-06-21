import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Routes from "./Routes.tsx";
import './App.css';

function App() {
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3 px-3">
          <Navbar.Brand as={NavLink} to="/" className="fw-bold text-muted">Scratch</Navbar.Brand>
	<Navbar.Toggle />
	<Navbar.Collapse className="justify-content-end">
	  <Nav activeKey={window.location.pathname}>
	      <Nav.Link as={NavLink} to="/signup">Signup</Nav.Link>
	      <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
	  </Nav>
	</Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
