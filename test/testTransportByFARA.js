'use strict'

const tap = require('tap')
const transportByFara = require('../index')

tap.throws(
  function () {
    const options = false
    transportByFara(options)
  },
  {message: 'Missing required input: options object'},
  'requires an options object'
)

tap.throws(
  function () {
    const options = {
      postnummer: false
    }
    transportByFara(options)
  },
  {message: 'Missing required input: options.postnummer'},
  'requires options.postnummer to exist'
)

tap.throws(
  function () {
    const options = {
      postnummer: true,
      skoleid: false
    }
    transportByFara(options)
  },
  {message: 'Missing required input: options.skoleid'},
  'requires options.skoleid to exist'
)

tap.test('returns false if postnummer Fyresdal og skole Vest-Telemark (Dalen)', function (test) {
  const options = {
    postnummer: 3870,
    skoleid: 3880
  }
  tap.equal(transportByFara(options), false, 'Test OK')
  test.done()
})

tap.test('returns true if postnummer Notodden og skole Vest-Telemark (Seljord)', function (test) {
  const options = {
    postnummer: 3681,
    skoleid: 3840
  }
  tap.equal(transportByFara(options), true, 'Test OK')
  test.done()
})

tap.test('returns false if postnummer 3831 Ulefoss og skole Seljord', function (test) {
  const options = {
    postnummer: 3831,
    skoleid: 3840
  }
  tap.equal(transportByFara(options), false, 'Test OK')
  test.done()
})

tap.test('returns true if postnummer Porsgrunn og skole Seljord', function (test) {
  const options = {
    postnummer: 3912,
    skoleid: 3840
  }
  tap.equal(transportByFara(options), true, 'Test OK')
  test.done()
})

tap.test('returns true if postnummer Porsgrunn og skole Bø', function (test) {
  const options = {
    postnummer: 3912,
    skoleid: 3802
  }
  tap.equal(transportByFara(options), true, 'Test OK')
  test.done()
})

tap.test('returns false if postnummer 3840 Seljord og skole Bø', function (test) {
  const options = {
    postnummer: 3840,
    skoleid: 3802
  }
  tap.equal(transportByFara(options), false, 'Test OK')
  test.done()
})

tap.test('returns true if postnummer Skien og skole Bø', function (test) {
  const options = {
    postnummer: 3702,
    skoleid: 3802
  }
  tap.equal(transportByFara(options), true, 'Test OK')
  test.done()
})

tap.test('returns false if postnummer 3803 Bø og skole Bø', function (test) {
  const options = {
    postnummer: 3803,
    skoleid: 3802
  }
  tap.equal(transportByFara(options), false, 'Test OK')
  test.done()
})

tap.test('returns false if postnummer 3833 Bø og skole Søve', function (test) {
  const options = {
    postnummer: 3803,
    skoleid: 3830
  }
  tap.equal(transportByFara(options), false, 'Test OK')
  test.done()
})

tap.test('returns true if postnummer Notodden og skole Søve', function (test) {
  const options = {
    postnummer: 3681,
    skoleid: 3830
  }
  tap.equal(transportByFara(options), true, 'Test OK')
  test.done()
})

tap.test('returns false if postnummer 3831 Ulefoss og skole Skogmo', function (test) {
  const options = {
    postnummer: 3831,
    skoleid: 3735
  }
  tap.equal(transportByFara(options), false, 'Test OK')
  test.done()
})

tap.test('returns true if postnummer Notodden og skole Skogmo', function (test) {
  const options = {
    postnummer: 3681,
    skoleid: 3735
  }
  tap.equal(transportByFara(options), true, 'Test OK')
  test.done()
})

tap.test('returns false if postnummer 3834 Gvarv og skole Bø', function (test) {
  const options = {
    postnummer: 3834,
    skoleid: 3802
  }
  tap.equal(transportByFara(options), false, 'Test OK')
  test.done()
})

tap.test('returns true if postnummer Notodden og skole Bø', function (test) {
  const options = {
    postnummer: 3681,
    skoleid: 3802
  }
  tap.equal(transportByFara(options), true, 'Test OK')
  test.done()
})

tap.test('returns true if postnummer Notodden og skole Kvitsund', function (test) {
  const options = {
    postnummer: 3681,
    skoleid: 3850
  }
  tap.equal(transportByFara(options), true, 'Test OK')
  test.done()
})

tap.test('returns false if postnummer Seljord og skole Kvitsund', function (test) {
  const options = {
    postnummer: 3835,
    skoleid: 3850
  }
  tap.equal(transportByFara(options), false, 'Test OK')
  test.done()
})
