'use strict'

const nodeGeocoder = require('node-geocoder')

const { getSellers } = require('./../seller/sellerService.js')
const { getProducts } = require('./../product/productService.js')

const locationService = () => {
  //Rua Américo Brasiliense
  const getLocation = (req, res) => {
    const options = {
      provider: 'google',
      apiKey: 'AIzaSyBiOh7Q_XMbZYFwDDQpMn3_C4_7V_GIUCQ',
      formatter: null
    }
    
    const address = req.query.address

    const geocoder = nodeGeocoder(options)

    return geocoder.geocode(address)
  }

  const deliveryLocation = async (req, res) => {

    const location = await getLocation(req, res)


    const sellerId = await getSellers(req, res, location[0])

    getProducts(sellerId.pocSearch.id)
      .then(data => {
        res.json(data)
      })
      .catch(error => {
        console.error(error)
        res.send('false')
      })
  }

  return {
    deliveryLocation,
    getLocation
  }
  
}

module.exports = locationService()