import React, {Component} from 'react';

import './card.scss';
class Card extends Component {
  
  constructor(props) {
    super(props)
  }

  formatNumber(number){
    var format = "R$ " + number.toFixed(2).replace(".",",");
    return format;
  }

  render() {
    let { product } = this.props
    return (
      <div className='card'>
        <div className='title'>
          <span>{ product.title }</span>
        </div>
        <div className='image'>
          <img src='https://courier-images-prod.imgix.net/produc_variant/00008502_e4356884-7f21-4fff-85e8-7d0377fe5ea8.jpg' /*{product.images[0].url}*/ />
        </div>
        <div className='price'>
          <span>{this.formatNumber(product.productVariants[0].price)}</span>
        </div>
        <div className='add-item'>
          <a className='add' onClick={() => this.props.addToCart(product.productVariants[0].price)}>Adicionar</a>
        </div>
      </div>
    )
  }
}

export default Card;