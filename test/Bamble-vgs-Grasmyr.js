'use strict'

const tap = require('tap')
const isFara = require('../index')
var options = {
  skoleid: 39601,
  postnummer: '',
  gatenavn: 'Djevelgaten',
  husnummer: '666'
}

options.postnummer = 3960
tap.equal(isFara(options), true, 'Bamble vgs, avdeling Grasmyr returns true from 3960 Stathelle')
