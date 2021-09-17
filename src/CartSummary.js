
import React from 'react';
import { NavItem, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  
  NavLink
} from 'reactstrap';

export default class CartSummary extends React.Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart-{this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {
            this.props.cart.map(cartItem => (
              <DropdownItem key={cartItem.product.id}>
                <Badge pill bg="success" text="dark" >{cartItem.quantity}</Badge>
                {cartItem.product.productName}
                <Badge pii bg="danger" text="dark"
                  onClick={() => this.props.removeFromCart(cartItem.product)}>X</Badge>
              </DropdownItem>
            ))
          }
          <DropdownItem divider />
          <DropdownItem>
            <Link to="cart">Go to Cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )

  }
  renderEmptyCart() {
    return (
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
    )
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart()}
      </div>
    )
  }
}
