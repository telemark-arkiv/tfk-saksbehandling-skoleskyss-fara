'use strict'

const tap = require('tap')
const isFara = require('../index')
var options = {
  skoleid: 39602,
  postnummer: ''
}

options.postnummer = 3960
tap.equal(isFara(options), true, 'Bamble Croftholmen returns true from 3960 Stathelle')
