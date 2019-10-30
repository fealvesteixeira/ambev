import React, {Component} from 'react';

import './miniCart.scss';
class MiniCart extends Component {
  
  constructor(props) {
    super(props)
    console.log(props)
  }

  formatNumber(number){
    var format = "R$ " + number.toFixed(2).replace(".",",");
    return format;
  }

  render() {
    const { cart } = this.props
    return (
      <div className='mini-cart'>
        <div className='container'>
          <div className='container-total'>
            <span>Total</span>
            <span className='total'>{ this.formatNumber(cart) }</span>
          </div>
        </div>
      </div>
    )
  }
}

export default MiniCart;