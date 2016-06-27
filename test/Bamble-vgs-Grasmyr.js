'use strict'

const tap = require('tap')
const isFara = require('../index')
var options = {
  skoleid: 39601,
  postnummer: ''
}

options.postnummer = 3960
tap.equal(isFara(options), true, 'Bamble Grasmyr returns true from 3960 Stathelle')
