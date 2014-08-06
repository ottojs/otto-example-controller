
'use strict';

// Modules
require('should');

// Subject
var otto_controller = require('../lib/index.js');

describe('Otto Example Controller', function () {

  describe('.say_hello()', function () {

    it('should set res.locals.says to "Hello"', function () {

      var res = {
        locals : {}
      };

      otto_controller.say_hello({}, res, function () {
        res.locals.should.have.property('says').and.equal('Hello!');
      });

    });

  });

  describe('.say_dynamic()', function () {

    it('should set res.locals.says to provided value', function () {

      var res = {
        locals : {}
      };

      // Function 1
      var fn1 = otto_controller.say_dynamic('Goodbye!');
      fn1({}, res, function () {
        res.locals.should.have.property('says').and.equal('Goodbye!');
      });

      // Function 2
      var fn2 = otto_controller.say_dynamic('Dynamic!');
      fn2({}, res, function () {
        res.locals.should.have.property('says').and.equal('Dynamic!');
      });

    });

  });

});
