const chai = require('chai');
const http = require('chai-http'); // Extensão da lib chai p/ simular requisições http
const subSet = require('chai-subset'); // Extensao da lib chai p/ verificar objetos

const sellerService = require('./sellerService.js'); // Arquivo a ser testado

chai.use(http);
chai.use(subSet);

describe('Testes de integração', () => {
   
    it('Get seler a partir da localização', async () => {
        const location = {
            latitude: -23.6326915,
            longitude: -46.6998379
        }

        const sellerId = await sellerService.getSellers('', '', location)

        let id = sellerId.pocSearch[0].id


        chai.expect('532').to.equal(id)
  });
})

