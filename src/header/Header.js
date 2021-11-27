import React, {Component} from 'react'
import {Navbar, Container, Nav, NavItem, Form, FormControl} from 'react-bootstrap'
import {withAuth0} from "@auth0/auth0-react";
import {Link} from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import CartBadgedIcon from './CartBadgedIcon';
import SettingsIcon from '@mui/icons-material/Settings';
import UserSetup from './UserSetup';
import {withRouter} from 'react-router-dom';
import shopifyLogo from '../images/logo.png'

class Header extends Component {

  handleCategoryChange = (e) => this.props.updateCategoryFilter(e.target.value);
  handleTextChange = (e) => this.props.updateTextFilter(e.target.value);
  handleSubmit = (e) => e.preventDefault();

  getCategories = () => {
    return ['all', ...new Set(this.props.allProducts.map(element => element.category))];
  }

  render() {
    return (
      <>
        <Navbar style={{marginBottom: "2%"}} expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand><Link style={{padding: 0}} to="/" className="nav-link"><img src={shopifyLogo} alt="shopify logo" /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavItem variant="light"><Link to="/about" className="nav-link">About Us</Link></NavItem>
              </Nav>
              {this.props.location.pathname === '/' &&
                <Form onSubmit={this.handleSubmit} className="d-flex">
                  <Container>
                    <Form.Select onChange={this.handleCategoryChange} aria-label="Floating label select example">
                      {this.getCategories().map((element, index) => {
                        return <option key={index} value={element}>{element}</option>
                      })}
                    </Form.Select>
                  </Container>
                  <Container>
                    <FormControl
                      type="text"
                      value={this.props.textFilter}
                      className="me-2"
                      placeholder="Filter by Text"
                      aria-label="text"
                      onChange={this.handleTextChange}
                    />
                  </Container>
                </Form>
              }
              <Nav>
                {this.props.auth0.isAuthenticated &&
                  this.props.user.isAdmin &&
                  <NavItem>
                    <Container>
                      <Link to="/admin" className="nav-link">
                        <SettingsIcon sx={{fontSize: 40}} />
                      </Link>
                    </Container>
                  </NavItem>}
                {this.props.auth0.isAuthenticated &&
                  <>
                    <UserSetup setupUser={this.props.setupUser} />
                    <NavItem>
                      <Link to="/cart" className="nav-link">
                        <CartBadgedIcon cart={this.props.cart} />
                      </Link>
                    </NavItem>
                  </>}
                <NavItem>{this.props.auth0.isAuthenticated ? <Container><LogoutButton /></Container> : <LoginButton />}</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </>
    )
  }
}

export default withRouter(withAuth0(Header));
