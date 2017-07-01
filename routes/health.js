(function() {
    'use strict';

    var express = require('express');
    var router = express.Router();
    var Promise = require("bluebird");
    var config = require('../config/dummyService1');

    var httpStatus = require('http-status-codes');

    router.get('/', (req, res) => {
        res.header('Cache-Control', 'no-store');
        res.header('Pragma', 'no-cache');
        healthResponse(req, res);
    });

    router.post('/', (req, res) => {
        res.header('Cache-Control', 'no-store');
        res.header('Pragma', 'no-cache');
        healthResponse(req, res);
    });

    var healthResponse = function(req, res) {
        var responseObject = { healthy: 'UP' };

        responseObject.services = [{
            name: 'Dummy Service 1',
            endpoint: 'endpoint example 1',
            status: httpStatus.OK
        }, {
            name: 'Dummy Service 2',
            endpoint: 'endpoint example 2',
            status: httpStatus.OK
        }, {
            name: 'Dummy Service 3',
            endpoint: 'endpoint example 3',
            status: httpStatus.OK
        }];

        var myDummy1 = getDummy1Promise();
        var myDummy2 = getDummy2Promise();
        var myDummy3 = getDummy3Promise();

        Promise.all([myDummy1, myDummy2, myDummy3]).then(function (values) {
          var dummy1Response = values[0];
          responseObject.services[0].status = dummy1Response;

          var dummy2Response = values[1];
          responseObject.services[1].status = dummy2Response;

          var dummy3Response = values[2];
          responseObject.services[2].status = dummy3Response;

          responseObject.services.forEach( function (item) {
            if (item.status === httpStatus.SERVICE_UNAVAILABLE){
              res.status(httpStatus.SERVICE_UNAVAILABLE);
              responseObject.healthy = 'SERVICE(S) DOWN';
            }
          });
          res.send(responseObject);
          return null;
        });
    };

    var getDummy1Promise = function () {
      return httpStatus.OK
    }
    var getDummy2Promise = function () {
return httpStatus.OK
      }

    var getDummy3Promise = function () {
      return httpStatus.OK
    }
    module.exports = router;
}());
