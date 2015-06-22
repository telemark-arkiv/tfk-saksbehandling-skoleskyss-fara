'use strict';

var assert = require('assert');
var transportByFara = require('../index');

describe('transportByFara', function() {

  it('requires an options object', function(done) {

    var options = false;
    var result = transportByFara(options);
    var condition = false;
    if ((result instanceof Error) && /Missing required input: options object/.test(result)) {
      condition = true;
    }
    assert.equal(true, condition);
    done();
  });

  it('requires options.postnummer to exist', function(done) {

    var options = {
      postnummer: false
    };
    var result = transportByFara(options);
    var condition = false;
    if ((result instanceof Error) && /Missing required input: options.postnummer/.test(result)) {
      condition = true;
    }
    assert.equal(true, condition);
    done();
  });

  it('requires options.skoleid to exist', function(done) {

    var options = {
      postnummer: true,
      skoleid: false
    };
    var result = transportByFara(options);
    var condition = false;
    if ((result instanceof Error) && /Missing required input: options.skoleid/.test(result)) {
      condition = true;
    }
    assert.equal(true, condition);
    done();
  });

  it('returns false if postnummer Fyresdal og skole Vest-Telemark (Dalen)', function(done) {

    var options = {
      postnummer: 3870,
      skoleid: 3880
    };
    var result = transportByFara(options);
    assert.equal(false, result);
    done();
  });

  it('returns true if postnummer Notodden og skole Vest-Telemark (Seljord)', function(done) {

    var options = {
      postnummer: 3681,
      skoleid: 3840
    };
    var result = transportByFara(options);
    assert.equal(true, result);
    done();
  });

  it('returns false if postnummer 3831 Ulefoss og skole Seljord', function(done) {

    var options = {
      postnummer: 3831,
      skoleid: 3840
    };
    var result = transportByFara(options);
    assert.equal(false, result);
    done();
  });

  it('returns true if postnummer Porsgrunn og skole Seljord', function(done) {

    var options = {
      postnummer: 3912,
      skoleid: 3840
    };
    var result = transportByFara(options);
    assert.equal(true, result);
    done();
  });

  it('returns true if postnummer Porsgrunn og skole Bø', function(done) {

    var options = {
      postnummer: 3912,
      skoleid: 3802
    };
    var result = transportByFara(options);
    assert.equal(true, result);
    done();
  });

  it('returns false if postnummer 3840 Seljord og skole Bø', function(done) {

    var options = {
      postnummer: 3840,
      skoleid: 3802
    };
    var result = transportByFara(options);
    assert.equal(false, result);
    done();
  });

  it('returns true if postnummer Skien og skole Bø', function(done) {

    var options = {
      postnummer: 3702,
      skoleid: 3802
    };
    var result = transportByFara(options);
    assert.equal(true, result);
    done();
  });

  it('returns false if postnummer 3803 Bø og skole Bø', function(done) {

    var options = {
      postnummer: 3803,
      skoleid: 3802
    };
    var result = transportByFara(options);
    assert.equal(false, result);
    done();
  });

  it('returns false if postnummer 3833 Bø og skole Søve', function(done) {

    var options = {
      postnummer: 3803,
      skoleid: 3830
    };
    var result = transportByFara(options);
    assert.equal(false, result);
    done();
  });

  it('returns true if postnummer Notodden og skole Søve', function(done) {

    var options = {
      postnummer: 3681,
      skoleid: 3830
    };
    var result = transportByFara(options);
    assert.equal(true, result);
    done();
  });

  it('returns false if postnummer 3831 Ulefoss og skole Skogmo', function(done) {

    var options = {
      postnummer: 3831,
      skoleid: 3735
    };
    var result = transportByFara(options);
    assert.equal(false, result);
    done();
  });

  it('returns true if postnummer Notodden og skole Skogmo', function(done) {

    var options = {
      postnummer: 3681,
      skoleid: 3735
    };
    var result = transportByFara(options);
    assert.equal(true, result);
    done();
  });

  it('returns false if postnummer 3834 Gvarv og skole Bø', function(done) {

    var options = {
      postnummer: 3834,
      skoleid: 3802
    };
    var result = transportByFara(options);
    assert.equal(false, result);
    done();
  });

  it('returns true if postnummer Notodden og skole Bø', function(done) {

    var options = {
      postnummer: 3681,
      skoleid: 3802
    };
    var result = transportByFara(options);
    assert.equal(true, result);
    done();
  });

});