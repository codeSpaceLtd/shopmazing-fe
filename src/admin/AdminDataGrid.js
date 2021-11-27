import React, {Component} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './admin.css';


export default class AdminDataGrid extends Component {

  render() {
    return (
      <>
        <Container style={{maxHeight: "80vh", overflow: "scroll", overflowX: "hidden"}}>
          <Table striped bordered hover>
            <thead style={{backgroundColor: "white", position: "sticky", top: 0}}>
              <tr>
                <th><Button variant="success" onClick={this.props.showAddModal} >+</Button></th>
                <th>Product</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Sold</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.allProducts.map(element => {
                  return (
                    <tr key={element._id}>
                      <td><Button variant="secondary" size="sm" onClick={() => this.props.showEditModal(element)}>Edit</Button></td>
                      <td>{element.name}</td>
                      <td>{element.description}</td>
                      <td>{element.category}</td>
                      <td>{`$${element.price}`}</td>
                      <td>{element.stock}</td>
                      <td>{element.quantitySold}</td>
                      <td><Button variant="danger" size="sm" onClick={() => this.props.deleteProducts(element._id)}>X</Button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </Container>
      </>

    );
  }
}
