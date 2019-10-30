const chai = require('chai');
const http = require('chai-http'); // Extensão da lib chai p/ simular requisições http
const subSet = require('chai-subset'); // Extensao da lib chai p/ verificar objetos

const locationService = require('./locationService.js'); // Arquivo a ser testado

chai.use(http);
chai.use(subSet);

describe('Testes de integração', () => {
   
    it('Get localização da api do google', async () => {
        const request = {
            query: {
                address: 'Rua Américo Brasiliense'
            }
        }
        const location = await locationService.getLocation(request)

        let neighborhood = location[0].extra.neighborhood

        chai.expect('Santo Amaro').to.equal(neighborhood)
  });
})

