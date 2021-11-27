import React, {Component} from 'react'
import Cartitem from './Cartitem'
import {withAuth0} from '@auth0/auth0-react';
import PlaceOrder from './PlaceOrder';
import Success from './Success';
import OutOfRange from './OutOfRange';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {Container} from 'react-bootstrap';


class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      success: false,
      outOfRange: false,
    }
  }

  componentDidMount() {
    this.setTotal();
  }

  handleClick = (id) => {
    this.props.removeFromCart(id);
  }

  setTotal = (clear) => {
    if (clear !== 0) {
      this.setState({total: this.props.cart.map(element => element.total).reduce((a, b) => Number(a) + Number(b), 0).toFixed(2)})
    } else {
      this.setState({total: 0});
    }
  }

  setSuccess = () => {
    this.setState({success: true});
  }

  setOutOfRange = (status) => {
    this.setState({outOfRange: status});
  }

  render() {
    return (
      <>
        {this.state.success && <Success />}
        {this.state.outOfRange && <OutOfRange setOutOfRange={this.setOutOfRange} />}
        <Container><h1>{this.props.auth0.isAuthenticated && this.props.auth0.user.name + '\'s '}Shopping Cart</h1></Container>
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.cart.map(element => {
                  return (
                    <Cartitem
                      key={element._id}
                      product={element}
                      setTotal={this.setTotal}
                      removeFromCart={this.props.removeFromCart}
                      adjustCartItemQuantity={this.props.adjustCartItemQuantity}
                      setOutOfRange={this.setOutOfRange}
                    />
                  )
                })
              }
              <tr>
                <td colSpan='4'></td>
                <td >{`$${this.state.total}`}</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
          {this.props.cart.length > 0 ?
            <Container fluid>
              <PlaceOrder
                placeOrder={this.props.placeOrder}
                cart={this.props.cart}
                style={{alignSelf: "right"}}
                setTotal={this.setTotal}
                setSuccess={this.setSuccess}
              />
            </Container>
            : <Button variant="secondary" disabled>Place Order</Button>}
        </Container>
      </>
    )
  }
}
export default withAuth0(Cart)
