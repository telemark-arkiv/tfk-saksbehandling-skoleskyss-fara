'use strict'

const tap = require('tap')
const isFara = require('../index')
var options = {
  skoleid: 3880,
  postnummer: ''
}

options.postnummer = 3960
tap.equal(isFara(options), true, 'Vest-telemark vgs, avdeling Dalen returns true from 3960 Stathelle')
