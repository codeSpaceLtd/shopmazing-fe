import {Component} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import EditProductForm from "./EditProductForm";

class EditProductModal extends Component {

  render() {
    return (
      <Modal
        show={this.props.editModalIsVisible}
        onHide={this.props.hideModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Edit {this.props.productToEdit.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditProductForm
            productToEdit={this.props.productToEdit}
            editProducts={this.props.editProducts}
            hideModal={this.props.hideModal}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  };
}

export default EditProductModal;
