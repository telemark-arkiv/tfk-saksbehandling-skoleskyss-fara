'use strict'

const tap = require('tap')
const isFara = require('../index')
var options = {
  skoleid: 3735,
  postnummer: ''
}

options.postnummer = 3960
tap.equal(isFara(options), true, 'Skogmo vgs returns true from 3960 Stathelle')
