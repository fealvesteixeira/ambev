'use strict'

const routes = require('./routes/routes.js')

const Modules = (app) => {
  
  const initModules = (app) => {
    routes(app)
  }
  return {
    initModules
  }
}

module.exports = Modules()