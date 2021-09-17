import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Badge } from 'react-bootstrap'

export default class CategoryList extends Component {
    //state içerden erişim örneği
    state = {
        categories: []
    }
    //fonksiyonun çalışması için gerekli
    componentDidMount() {
        this.getCategories()
    }

    getCategories = () => {
        fetch("http://localhost:3000/categories")
            .then(response => response.json())//api den verileri json formatına çevir
            .then(data => this.setState({ categories: data }))//categories dizine aktar
    }
    render() {
        return (
            <div>
                <h3><Badge pill bg="secondary" text="info">{this.props.info.title}</Badge></h3>
                <ListGroup>
                    {this.state.categories.map(category => (//state ile categoriesin map fonksiyonunu kullan
                        <ListGroupItem color="info"
                            active={category.categoryName === this.props.currentCategory ? true : false}
                            onClick={() => this.props.changeCategory(category)}
                            key={category.id}>{category.categoryName}</ListGroupItem>
                    ))}
                </ListGroup>
                {/*<h4>{this.props.currentCategory}</h4>*/}
            </div>
        )
    }
}
