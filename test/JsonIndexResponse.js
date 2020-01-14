var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../src/index.js');

var expect = chai.expect;
var should = chai.should();

chai.use(chaiHttp);

describe(' Teste - Chamada da página de apresentação.', () => {
    it('Valida chamada da página index.js', (done) => {
        chai.request(server)
            .get('/')
            .end(function (error, response) {
                response.body.should.have.property('home', 'Start do projeto do Monitor de Atividades');
            });
        done();
    });
});
