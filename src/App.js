import React, { Component } from 'react'
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import alertify from "alertifyjs";
import { Switch, Route } from 'react-router';
import CartList from './CartList';
import About from './About';
import Footer from './Footer';
import Contact from './Contact';


export default class App extends Component {
  //state ile alınacak diziler
  state = { currentCategory: "", products: [], cart: [] }
  //fonksiyon ile category ismi state'i değiştirir
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
    this.getProducts(category.id)
  }
  //product fonksiyonunu çağır
  componentDidMount() {
    this.getProducts()
  }
  //ürünlerin kategoriye göre listenlenmesini sağlar
  //products?categoryId=1
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products"
    if (categoryId) {
      url += "?categoryId=" + categoryId
    }
    fetch(url)
      .then(response => response.json()) //json türüne çevir
      .then(data => this.setState({ products: data })) //product state'ni değiştir
  }
  //sepete ürün eklme fonksiyonu
  addToCart = (product) => {
    let newCart = this.state.cart
    var addedItem = newCart.find(c => c.product.id === product.id)//find aynı id leri bulur
    if (addedItem) {
      addedItem.quantity += 1 //seçilen ürün aynı id ye sahipse miktarı artır
    }
    else { //değilse sepete ekler
      newCart.push({ product: product, quantity: 1 })
    }
    this.setState({ cart: newCart }) //sepete eklenen ürünleri cart dizisine aktar
    alertify.success(product.productName + " added to cart!", 1) //seçilen ürünleri mesaj yazdır
  }
  //Sepetten silme işlemi
  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id) //idlere göre filtrele
    this.setState({ cart: newCart })
    alertify.error(product.productName + " removed from cart!")//silinen ürünleri mesaj yazdır
  }

  render() {
    let categoryInfo = { title: "Category List" } //props ile data erişimi
    let productInfo = { title: "Product List" }
    return (
      <div>
        <Container>
          <div className="col-sm-12">
            <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          </div>
          <Switch>
            <Row>
              <Col className="col-sm-3" xs="3">
                <Route exact path="/" render={props => (
                  <CategoryList
                    {...props}//kopyasını al
                    currentCategory={this.state.currentCategory}
                    changeCategory={this.changeCategory}
                    info={categoryInfo} />
                )} />
              </Col>
              <Col className="col-sm-9" xs="9">
                <Route exact path="/" render={props => (
                  <ProductList
                    {...props} //kopyasını al
                    addToCart={this.addToCart}
                    products={this.state.products}
                    currentCategory={this.state.currentCategory}
                    info={productInfo} />
                )} />
              </Col>
              <Col>
                <Route exact path="/cart" render={props => (
                  <CartList
                    {...props}
                    removeFromCart={this.removeFromCart}
                    cart={this.state.cart}
                  />
                )} />
              </Col>
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
            </Row>
          </Switch>
          <Footer />
        </Container>
      </div>
    );
  }
}
