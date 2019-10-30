import React, {Component} from 'react';

import Layout from '../_commons/layout/Layout'
import Card from './../card/Card'
import MiniCart from './../miniCart/MiniCart'

class Product extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.location.state.data,
      cart: 0
    }
    this.addToCart = this.addToCart.bind(this)
  }
  componentDidMount() {
	  // console.log(this.props.location.state.data)
  }

  addToCart(price) {
    
    const currentValue = this.state.cart
    let newValue = parseFloat(currentValue) + parseFloat(price)
    this.setState({
      cart: newValue
    })
  }

  render() {
    const { data, cart } = this.state
  
    return (
      <Layout>
        <section className='container'>
          {
            data.products.map((product, i) => (
              <Card product={product} key={i} addToCart={this.addToCart}/>
            ))
          }
        </section>
        <MiniCart cart={cart}/>
      </Layout>
    );
  }
}

export default Product;