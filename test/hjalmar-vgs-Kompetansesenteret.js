'use strict'

const tap = require('tap')
const isFara = require('../index')
var options = {
  skoleid: 3716,
  postnummer: ''
}

options.postnummer = 3960
tap.equal(isFara(options), true, 'Hjalmar vgs, avvdeling Kompetansesenteret returns true from 3960 Stathelle')
