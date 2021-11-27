import React, {Component} from 'react';
import {Container, Row} from 'react-bootstrap';
import ProductCard from './ProductCard';
import './product.css'


export default class Products extends Component {


  render() {
    // filtering happens here
    let filteredProducts = [];
    if (this.props.textFilter === '' && this.props.categoryFilter === 'all') {
      filteredProducts = [...this.props.allProducts];
    } else {
      if (this.props.categoryFilter === 'all') {
        filteredProducts = this.props.allProducts.filter(element => element.name.match(new RegExp(this.props.textFilter, 'i')) || element.description.match(new RegExp(this.props.textFilter, 'i')));
      } else {
        filteredProducts = this.props.allProducts.filter(element => element.category === this.props.categoryFilter).filter(element => element.name.match(new RegExp(this.props.textFilter, 'i')) || element.description.match(new RegExp(this.props.textFilter, 'i')));
      }
    }
    filteredProducts = filteredProducts.filter(element => element.stock > 0);

    return (

      <Container>
        <Row xs={2} sm={3} md={5} offset-md={10} id="row">

          {
            filteredProducts.map((element, index) => {
              return (

                <ProductCard
                  key={index}
                  product={element}
                  addToCart={this.props.addToCart}
                />
              );
            })
          }
        </Row >

      </Container>
    )
  }
}

