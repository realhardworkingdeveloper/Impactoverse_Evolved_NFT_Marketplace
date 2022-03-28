import React from 'react';
import { Link } from 'react-router-dom'
import { Modal } from "react-bootstrap";

const CardModal = (props) => {
    
return (

    <Modal
    show={props.show}
    onHide={props.onHide}
  >
    <Modal.Header closeButton></Modal.Header>

    <div className="modal-body space-y-20 pd-40">
        <h3>Join Proposal</h3>
        <p className="text-center">You must have received at least <span className="price color-popup">3</span> reviews
        </p>
        <p>Enter your contribution rate. <span className="color-popup">5% available</span>
        </p>
        <input type="number" className="form-control" placeholder="1" />
        <Link to="/wallet-connect" className="btn btn-primary" data-toggle="modal" data-target="#popup_bid_success" data-dismiss="modal" aria-label="Close">Submit application</Link>
    </div>
    </Modal>
    
  );
};

export default CardModal;
