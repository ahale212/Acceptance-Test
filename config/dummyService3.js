(function () {
  'use strict';
  var expect = require('chai').expect;
  var soap = require('soap');
  var config = require('../../config/config');

  describe('Smoketested post-deployment for Dummy Service 1 end points', function () {

    var dummyURL = 'http://google.com';
    this.timeout(10000);

    it('will create sopa client from Dummy Service 1 wsdl', function (done){
      soap.createClient(config.dummyService3.wsdl, function (err, client) {
        expect(err).to.be.equal(null);
        expect(client).to.not.equal(undefined);
        expect(client.wsdl.services.InstallmentScheduleService.ports.BasicHttpBinding_IBIService.location).to.equal(dummyURL);
        done();
      });
    });

      it('returns a response when the getDummyService method is called', function (done) {
        soap.createClient(config.dummyService3.wsdl, function (err, client) {
          client.addSoapHeader(config.dummyService3.soapHeader);
            var soapBody = config.dummyService3.soapBody(parameters);

          client.getDummyService(soapBody, function (err, soapResponse) {
            expect(soapResponse).to.not.equal('');
            expect(soapResponse).to.not.be.empty;
            expect(soapResponse.getDummyService3.MsgStatus).to.exist;

            if(err){
              return done(err);
            }else {
                done();
            }

          });
      });

    });
  });

} ());
