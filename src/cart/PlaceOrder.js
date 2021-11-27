import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

export default class PlaceOrder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      success: false,
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.placeOrder(this.props.cart);
    this.props.setTotal(0);
    this.props.setSuccess();
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleClick}>Place Order</Button>
      </>
    )
  }
}
