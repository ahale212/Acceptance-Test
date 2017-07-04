(function () {
  'use strict'


  var dummyService1 = {
    // preproduction : {
      wsdl : "http://google.com?wsdl",
      soapHeader : 'dummyHeader',
      webMethodName : 'dummyName',
      soapBody : 'dummyBody'
    },

    production : {
      wsdl : 'http://google.com',
      soapHeader : '',
      webMethodName : 'dummyName',
      soapBody : 'dummyResponse'
    }
  };

  module.exports  = {
    dummyService1: dummyService1
  };

} ());
