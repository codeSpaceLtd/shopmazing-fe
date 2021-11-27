import {Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

class NewProductForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      randomProduct: {
        name: '',
        description: '',
        image: '',
        category: '',
        price: '',
        stock: '',
        quantitySold: 0,
      },
    }
  }

  getRandomProduct = async () => {
    const config = {
      method: 'get',
      baseURL: `${process.env.REACT_APP_SERVER_URL}`,
      url: '/random',
    }
    try {
      const randomResponse = await axios(config);
      this.setState({
        randomProduct: {
          name: randomResponse.data.name,
          description: randomResponse.data.description,
          image: randomResponse.data.image,
          category: randomResponse.data.category,
          price: randomResponse.data.price,
          stock: randomResponse.data.stock,
          quantitySold: 0,
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleClick = () => {
    this.getRandomProduct();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.formName.value;
    const description = event.target.formDescription.value;
    const image = event.target.formUrl.value;
    const category = event.target.formCategory.value;
    const price = event.target.formPrice.value;
    const stock = event.target.formStock.value;
    const quantitySold = '0';
    const productObj = {name, description, image, price, stock, category, quantitySold};
    event.target.reset();
    this.props.addProducts(productObj);
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Product Name"
              defaultValue={this.state.randomProduct.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Product Description"
              defaultValue={this.state.randomProduct.description}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formUrl">
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Image Url"
              defaultValue={this.state.randomProduct.image}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Product Category"
              defaultValue={this.state.randomProduct.category}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Sell Price"
              defaultValue={this.state.randomProduct.price}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formStock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Available Stock"
              defaultValue={this.state.randomProduct.stock}
            />
          </Form.Group>
          <Container style={{display: "flex"}}>
            <Container id="add-item-button">
              <Button variant="dark" type="submit">
                Submit
              </Button>
              <Button
                onClick={this.handleClick}
                variant="dark"
                type="button"
              >Random Product
              </Button>
            </Container>
          </Container>
        </Form>
      </>
    );
  }
};

export default NewProductForm;
