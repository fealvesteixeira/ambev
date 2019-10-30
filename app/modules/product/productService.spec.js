const chai = require('chai');
const http = require('chai-http'); // Extensão da lib chai p/ simular requisições http
const subSet = require('chai-subset'); // Extensao da lib chai p/ verificar objetos

const productService = require('./productService.js'); // Arquivo a ser testado

chai.use(http);
chai.use(subSet);

describe('Testes de integração', () => {
   
    it('Get produtos através do id', async () => {
        

        const products = await productService.getProducts(532)

        let id = products.poc.products[0].id
        chai.expect('8868').to.equal(id)
  });
})

