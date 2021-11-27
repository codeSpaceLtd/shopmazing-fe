import React, {Component} from 'react';
import ProductModal from './ProductModal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './product.css'

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    }
  }

  openModal = () => {
    this.setState({modal: true})

  }

  closeModal = () => {
    this.setState({modal: false})
  }

  handleClick = () => {
    this.props.addToCart(this.props.product._id);
  }

  render() {
    return (
      <>

        <div className="single-card" >
          <img
            className="product-card-img"
            src={this.props.product.image}
            onClick={this.openModal}
            alt={this.props.product.name}
          />
          <p className="product-name">{this.props.product.name}</p>
          <Container style={{display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
            <p className="product-price">{'$' + this.props.product.price}</p>
            <Button
              size="sm"
              variant="secondary"
              style={{maxWidth: "60%", justifySelf: "right"}}
              onClick={this.handleClick}
            >Add to Cart</Button>
          </Container>
          <ProductModal modal={this.state.modal} closeModal={this.closeModal} products={this.props.product} />
        </div>

      </>
    )
  }
}

