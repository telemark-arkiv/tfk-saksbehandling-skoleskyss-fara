'use strict'

const tap = require('tap')
const isFara = require('../index')
var options = {
  skoleid: 3850,
  postnummer: '',
  gatenavn: 'Djevelgaten',
  husnummer: '666'
}

options.postnummer = 3960
tap.equal(isFara(options), true, 'Kvitsund vgs returns true from 3960 Stathelle')
