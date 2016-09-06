'use strict'

const tap = require('tap')
const isFara = require('../index')
var options = {
  skoleid: 3825,
  postnummer: '',
  gatenavn: 'Djevelgaten',
  husnummer: '666'
}

options.postnummer = 3960
tap.equal(isFara(options), true, 'Nome vgs, avdeling Lunde returns true from 3960 Stathelle')

options.postnummer = 3803
options.gatenavn = 'Rokkemakervegen'
options.husnummer = '81'
tap.equal(isFara(options), true, 'Nome vgs, avdeling Lunde returns true from 3803')

// Hovedregel for 3801, 3803, 3810 og 3830 er SANN FARA - Samme på Specials
