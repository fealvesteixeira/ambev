const express = require('express')

const { initModules } = require('./../modules')
const ServerFactory = () => {
  const app = express();
  const port = process.env.PORT || 5000;

  const startLocalServer = () => {
    // server.listen(config.server.port, config.server.url, () => {
    //   console.log('Start server');
    // })

    app.get('/api/mensagem', (req, res) => {
      res.send({ express: 'Hello From Express' });
    });

    app.listen(port, () => console.log(`Listening on port ${port}`));
  }

  const startModules = () => {
    initModules(app)
  }

  const start = () => {
    startLocalServer()
    startModules()
  }

  return {
    start: start
  }
}

module.exports = ServerFactory()
