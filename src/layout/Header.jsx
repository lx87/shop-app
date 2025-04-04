import { useSelector } from "react-redux";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Cart from '../components/Cart';

const Header = () => {
  const [show, setShow] = useState(false);
  const { totalPrice } = useSelector(state => state.cart);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand fst-italic fw-bold fs-3" href="#">Fortnite balls</a>
          <button className='btn btn-primary d-flex fs-4' onClick={handleShow}> 
            <i className="bi bi-bag-fill text-white me-2"></i>
            <p className='m-0'>${totalPrice.toFixed(2)}</p>
          </button>
        </div>
      </nav>
      <Offcanvas show={show} onHide={handleClose} placement='top'>
        <Offcanvas.Header>
          <Offcanvas.Title>Корзина</Offcanvas.Title>
          <h2 className="m-0">Total price: ${totalPrice.toFixed(2)}</h2>
          <button className='btn btn-secondary' onClick={handleClose}>
            <i className="bi bi-x-lg"></i>
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cart/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
