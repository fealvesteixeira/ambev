'use strict'

const { deliveryLocation } = require('./../location/locationService.js')
// const {  } = require('./seller/sellerService.js')
// const {  } = require('./product/productService.js')

module.exports = (app) => {
  app.get('/location', deliveryLocation)
  // console.log('aqui')
  
}

