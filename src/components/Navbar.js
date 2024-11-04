import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

function ColorSchemesExample({ cartItems }) {
  const [showCart, setShowCart] = useState(false);

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  return (
    <>
      <Navbar className="shadow p-3 mb-5 bg-body rounded" bg="light">
        <Container>
          <Navbar.Brand href="#home" style={{ fontFamily: "monospace", fontWeight: "bolder" }}>CHEESY BLISS</Navbar.Brand>
          <Nav className="ml-auto">
            <Navbar.Brand href="#home">Login</Navbar.Brand>
            <Button variant="light" onClick={handleShow}>
              Cart ({cartItems.length})
            </Button>
            <Navbar.Brand href="#features">Order Tracking</Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>

      <Offcanvas show={showCart} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <h5>{item.name}</h5>
                <p>Variant: {item.variant}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.price}</p>
                <hr />
              </div>
            ))
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ColorSchemesExample;
