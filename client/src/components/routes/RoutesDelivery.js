import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Home from '../home/Home'
import Product from '../products/Product'

class RoutesDelivery extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/product" exact={true} component={Product} />
        </Switch>
    </ BrowserRouter>
    )
  }
}

export default RoutesDelivery