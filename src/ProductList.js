import React, { Component } from 'react'
import { Button, Table } from 'reactstrap';
import { Badge } from 'react-bootstrap'

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <h3><Badge pill bg="info" text="secondary">
                    {this.props.info.title}</Badge>{` > `}
                    <Badge pill bg="secondary" text="info">
                    {this.props.currentCategory}</Badge></h3>
                <Table bordered dark hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Brand Name</th>
                            <th>Fuel Type</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product => (
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.productName}</td>
                                <td>{product.fuelType}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.unitsInStock}</td>
                                <td><Button onClick={() => this.props.addToCart(product)}
                                    outline color="info">add
                                </Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
