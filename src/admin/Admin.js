import React, {Component} from 'react'
import AdminDataGrid from './AdminDataGrid';
import AddProductModal from './AddProductModal';
import EditProductModal from './EditProductModal';

export default class Admin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addModalIsVisible: false,
      editModalIsVisible: false,
      productToEdit: {},
    }
  }

  hideModal = () => {
    this.setState({addModalIsVisible: false, editModalIsVisible: false})
  }

  showAddModal = () => {
    this.setState({addModalIsVisible: true})
  }

  showEditModal = (productObj) => {
    this.setState({editModalIsVisible: true, productToEdit: productObj})
  }

  render() {
    return (
      <>
        <AddProductModal
          addModalIsVisible={this.state.addModalIsVisible}
          hideModal={this.hideModal}
          addProducts={this.props.addProducts}
        />
        <EditProductModal
          editModalIsVisible={this.state.editModalIsVisible}
          hideModal={this.hideModal}
          editProducts={this.props.editProducts}

          productToEdit={this.state.productToEdit}
        />
        <AdminDataGrid
          allProducts={this.props.allProducts}
          deleteProducts={this.props.deleteProducts}
          showAddModal={this.showAddModal}
          showEditModal={this.showEditModal} />
      </>
    )
  }
}
