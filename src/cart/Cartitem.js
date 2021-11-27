import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class Cartitem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.product.quantity,
    }
  }

  handleChange = (e) => {
    if (e.target.value < 0 || e.target.value > Number(this.props.product.stock)) {
      this.props.setOutOfRange(true);
      e.target.value = this.state.value;
    } else {
      this.setState({value: e.target.value});
      this.props.product.total = (Number(e.target.value) * Number(this.props.product.price)).toFixed(2);
      this.props.setTotal();
      this.props.adjustCartItemQuantity(this.props.product._id, Number(e.target.value));
    }

  }

  render() {
    return (
      <>
        <tr key={this.props.product._id}>
          <td>{this.props.product.name}</td>
          <td>{this.props.product.description}</td>
          <td>{`$${this.props.product.price}`}</td>
          <td>
            <Form>
              <Form.Control value={this.state.value} onChange={this.handleChange} type="number" />
            </Form>
          </td>
          <td style={{minWidth: "6rem"}}>{`$${this.props.product.total}`}</td>
          <td><Button variant="secondary" onClick={() => this.props.removeFromCart(this.props.product._id)}>x</Button></td>
        </tr>
      </>
    )
  }
}
