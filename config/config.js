(function () {
  'use strict'


  var soapSvcConfig = require('./soapSvcConfig');
  // var restSvcConfig = require('./rest_service_config');

  var localOptions = {
    vcap: {
      services: {

          name : 'test',
          label : 'user-provided',
          dummyService1: soapSvcConfig.dummyService1,
          // dummyService2 : restSvcConfig.dummyService2,
          dummyService3 : soapSvcConfig.dummyService3
        
      }
    }
  };

  process.env.NODE_ENV = process.env.NODE_ENV || 'test';

  module.exports = localOptions.vcap.services[process.env.NODE_ENV];


} ());
