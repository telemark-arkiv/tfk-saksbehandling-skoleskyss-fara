'use strict'

const tap = require('tap')
const isFara = require('../index')
var options = {
  skoleid: 3770,
  postnummer: ''
}

options.postnummer = 3960
tap.equal(isFara(options), true, 'Kragerød vgs returns true from 3960 Stathelle')
