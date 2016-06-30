'use strict'

const tap = require('tap')
const isFara = require('../index')
var options = {
  skoleid: 3722,
  postnummer: '',
  gatenavn: 'Djevelgaten',
  husnummer: '666'
}

options.postnummer = 3960
tap.equal(isFara(options), true, 'Toppidrettsgymnset vgs returns true from 3960 Stathelle')
