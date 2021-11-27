import {Component} from "react";
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import './product.css'


class ProductModal extends Component {

  render() {
    return (
      <>
        {this.props.products &&
          <Modal show={this.props.modal} onHide={this.props.closeModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.products.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body >
              <Container style={{textAlign: "center"}}>
                <img src={this.props.products.image} alt="img" />
              </Container>
              <Container>
                <p>{this.props.products.description}</p>
              </Container>
            </Modal.Body>
          </Modal>

        }
      </>
    )
  };
}

export default ProductModal;


