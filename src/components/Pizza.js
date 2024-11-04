import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Pizza({ pizza, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="pizza-card">
      <div className="card p-4 shadow-lg rounded-3">
        <h3 className="pizza-name text-center mb-4" onClick={handleShow}>
          {pizza.name}
        </h3>
        <img
          src={pizza.image}
          className="img-fluid rounded mx-auto d-block pizza-image"
          alt={pizza.name}
          style={{ height: "200px", width: "225px" }}
          onClick={handleShow}
        />

        <div className="flex-container mt-4">
          <div className="w-50">
            <p className="label-text">Variants</p>
            <select
              className="form-control"
              value={variant}
              onChange={(e) => setVariant(e.target.value)}
            >
              {pizza.variants.map((v, index) => (
                <option key={index} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>
          <div className="w-50">
            <p className="label-text">Quantity</p>
            <select
              className="form-control"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              {[...Array(10).keys()].map((x, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex-container mt-4">
          <div className="w-100">
            <h1 className="price-text mt-3">
              Price: ₹{pizza.prices[0][variant] * quantity}
            </h1>
          </div>
          <div className="w-100 text-center">
            <button
              className="btn btn-primary mt-2"
              onClick={() => addToCart(pizza, variant, quantity)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={pizza.image}
            className="img-fluid rounded mx-auto d-block"
            alt={pizza.name}
            style={{ height: "350px", width: "400px" }}
          />
          <p className="mt-4">{pizza.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Pizza;
