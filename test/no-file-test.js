'use strict'

const tap = require('tap')
const transportByFara = require('../index')
const options = {
  skoleid: '007',
  postnummer: '1732',
  gatenavn: 'James Bonds Alle',
  husnummer: '4711'
}

tap.equal(transportByFara(options), false, 'Returns false if schoolid does not exist')
