import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import CartSummary from './CartSummary';

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <div className="navbar-expand navbar-dark bg-dark">
          <Navbar color="dark" light expand="md">
            <NavbarBrand href="/">Home</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="navbar-nav ml-auto ">
                <NavItem>
                  <NavLink to="About" href="/About">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="Contact" href="/Contact">Contact</NavLink>
                </NavItem>
                <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart} />
              </Nav>
            </Collapse>
            <div className="language-select">
              <select
                className="custom-select"
                value={this.props.language}
                onChange={e => this.props.handleSetLanguage(e.target.value)}>
                <option value="English">En</option>
                <option value="Turkish">Tr</option>
              </select>
            </div>
          </Navbar>
        </div>
      </div>
    );
  }
}