import React, {Component} from 'react';

import './loading.scss'

export default class Loading extends Component {
  render() {
    return (
      <div className='display'>
        <div className='loading'></div>
      </div>
    )  
  }
}