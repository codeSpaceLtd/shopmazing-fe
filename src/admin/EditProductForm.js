import {Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class EditProductForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const _id = this.props.productToEdit._id;
    const name = event.target.formName.value;
    const description = event.target.formDescription.value;
    const image = event.target.formUrl.value;
    const category = event.target.formCategory.value;
    const price = event.target.formPrice.value;
    const stock = event.target.formStock.value;
    const quantitySold = this.props.productToEdit.quantitySold;
    const productObj = {_id, name, stock, price, description, image, category, quantitySold};
    event.target.reset();
    this.props.hideModal();
    this.props.editProducts(productObj);
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder={this.props.productToEdit.name}
              defaultValue={this.props.productToEdit.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="name"
              placeholder={this.props.productToEdit.description}
              defaultValue={this.props.productToEdit.description}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formUrl">
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              type="name"
              placeholder={this.props.productToEdit.image}
              defaultValue={this.props.productToEdit.image}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="name"
              placeholder={this.props.productToEdit.category}
              defaultValue={this.props.productToEdit.category} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="name"
              placeholder={this.props.productToEdit.price}
              defaultValue={this.props.productToEdit.price} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formStock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="name"
              placeholder={this.props.productToEdit.stock}
              defaultValue={this.props.productToEdit.stock} />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
};

export default EditProductForm;
