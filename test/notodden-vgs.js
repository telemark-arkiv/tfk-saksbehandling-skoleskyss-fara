'use strict'

const tap = require('tap')
const isFara = require('../index')
var options = {
  skoleid: 3674,
  postnummer: '',
  gatenavn: 'Djevelgaten',
  husnummer: '666'
}

options.postnummer = 3960
tap.equal(isFara(options), true, 'Notodden vgs returns true from 3960 Stathelle')

// Postnummer 3810 GVARV har SANN SOM hovedregel og specials for FARA
