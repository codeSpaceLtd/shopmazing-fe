import {Component} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddProductForm from "./AddProductForm";

class AddProductModal extends Component {

  render() {
    return (
      <Modal
        show={this.props.addModalIsVisible}
        onHide={this.props.hideModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddProductForm
            product={this.props.product}
            addProducts={this.props.addProducts}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  };
}

export default AddProductModal;
