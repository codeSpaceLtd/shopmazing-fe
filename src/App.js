import React, {Component} from 'react';
import {withAuth0} from '@auth0/auth0-react';
import axios from 'axios';
import './App.css';
import Products from './home/Products';
import Header from './header/Header';
import Cart from './cart/Cart';
import AboutUs from './about-us/AboutUs';
import Admin from './admin/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      allProducts: [],
      textFilter: '',
      categoryFilter: 'all',
      user: {},
    }
  }

  componentDidMount() {
    this.getProducts();
  }

  updateCategoryFilter = (category) => {
    this.setState({categoryFilter: category});
  }

  updateTextFilter = (text) => {
    this.setState({textFilter: text});
  }

  getProducts = async () => {
    const config = {
      header: {"Access-Control-Allow-Origin": "*"},
      method: 'get',
      baseURL: `${process.env.REACT_APP_SERVER_URL}`,
      url: '/',
    }
    try {
      const productResponse = await axios(config);
      this.setState({allProducts: productResponse.data});
    } catch (error) {
      console.error(error);
    }
  }

  addProducts = async (productObj) => {
    const config = {
      method: 'post',
      baseURL: `${process.env.REACT_APP_SERVER_URL}`,
      url: '/products',
      data: productObj,
    }
    try {
      let response = await axios(config);
      this.setState({allProducts: [...this.state.allProducts, response.data]});
    } catch (error) {
      console.error(error);
    }
  }

  editProducts = async (productObj) => {
    const config = {
      method: 'put',
      baseURL: `${process.env.REACT_APP_SERVER_URL}`,
      url: `/products/${productObj._id}`,
      data: productObj,
    }
    try {
      await axios(config);
      this.getProducts();
    } catch (error) {
      console.error(error);
    }
  }

  deleteProducts = async (id) => {
    const config = {
      method: 'delete',
      baseURL: `${process.env.REACT_APP_SERVER_URL}`,
      url: `/products/${id}`,
    }
    try {
      await axios(config);
      let filteredProducts = this.state.allProducts.filter(element => element._id !== id);
      this.setState({allProducts: filteredProducts});
    } catch (error) {
      console.error(error);
    }
  }

  // Used for adjusting quantity in cart
  adjustCartItemQuantity = (id, quantity) => {
    const product = this.state.cart.find(({_id}) => _id === id);
    const filterCart = this.state.cart.filter(element => element._id !== product._id)[0];
    product.quantity = quantity;
    if (filterCart) {
      if (filterCart.length > 1) {
        this.setState({cart: [product, ...filterCart]});
      }
    } else {
      this.setState({cart: [product]});
    }
  }

  removeFromCart = (id) => {
    const productToRemove = this.state.allProducts.filter(element => element._id === id)[0];
    productToRemove.quantity = 0;
    let filteredProducts = this.state.cart.filter(product => product._id !== id);
    this.setState({cart: filteredProducts});
  }

  addToCart = (id) => {
    const containsProduct = (arr, productObj) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i]._id === productObj._id) {
          return true;
        }
      }
      return false;
    }
    const productToAdd = this.state.allProducts.filter(element => element._id === id)[0];
    if (!this.state.user.email > 0) {
      alert('Please log in before adding items to cart.')
    } else if (productToAdd.quantity >= productToAdd.stock) {
      alert('Item out of stock.')
    } else if (this.state.cart.length > 0 && containsProduct(this.state.cart, productToAdd)) {
      productToAdd.quantity = Number(productToAdd.quantity) + 1;
      productToAdd.total = Math.round(productToAdd.quantity * Number(productToAdd.price));
      const filterCart = this.state.cart.filter(element => element._id !== id);
      this.setState({cart: [...filterCart, productToAdd]});
    } else {
      productToAdd.quantity = 1;
      productToAdd.total = Math.round(productToAdd.quantity * Number(productToAdd.price));
      this.setState({cart: [...this.state.cart, productToAdd]})
    }
  }

  placeOrder = (orderArray) => {
    for (let i = 0; i < orderArray.length; i++) {
      const productToEdit = this.state.allProducts.filter(element => element._id === orderArray[i]._id)[0];
      const prodQuantity = orderArray[i].quantity;
      productToEdit.stock = Number(productToEdit.stock) - Number(prodQuantity);
      productToEdit.quantitySold = Number(productToEdit.quantitySold) + Number(prodQuantity)
      this.editProducts(productToEdit);
    }
    this.setState({cart: []});
  }

  postUser = async (userObj) => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        headers: {'Authorization': `Bearer ${jwt}`},
        method: 'post',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/users',
        data: userObj,
      };
      try {
        await axios(config);
        this.setState({user: userObj});
      } catch (error) {
        console.log(error);
      }
    }
  }

  setupUser = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        headers: {'Authorization': `Bearer ${jwt}`},
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/users',
      }
      try {
        const response = await axios(config);
        const user = response.data.filter(element => element.email === this.props.auth0.user.email)
        if (user.length > 0) {
          this.setState({user: user[0]})
        } else {
          const userToPost = {
            email: this.props.auth0.user.email,
            isAdmin: false,
          }
          this.postUser(userToPost);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    return (
      <>
        <Router>
          <Header
            allProducts={this.state.allProducts}
            updateTextFilter={this.updateTextFilter}
            updateCategoryFilter={this.updateCategoryFilter}
            textFilter={this.state.textFilter}
            categoryFilter={this.state.categoryFilter}
            cart={this.state.cart}
            user={this.state.user}
            setupUser={this.setupUser}
          />
          <Switch>
            <Route exact path="/">
              <Products
                allProducts={this.state.allProducts}
                textFilter={this.state.textFilter}
                categoryFilter={this.state.categoryFilter}
                addToCart={this.addToCart}
              />
            </Route>
            <Route exact path="/cart">
              <Cart
                placeOrder={this.placeOrder}
                adjustCartItemQuantity={this.adjustCartItemQuantity}
                removeFromCart={this.removeFromCart}
                cart={this.state.cart}
                allProducts={this.state.allProducts}
                setupUser={this.setupUser} />
            </Route>
            <Route exact path="/about">
              <AboutUs />
            </Route>
            {this.state.user.isAdmin &&
              <Route exact path="/admin">

                <Admin
                  allProducts={this.state.allProducts}
                  editProducts={this.editProducts}
                  deleteProducts={this.deleteProducts}
                  addProducts={this.addProducts}
                  getRandomProduct={this.getRandomProduct}
                />
              </Route>
            }
          </Switch>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
