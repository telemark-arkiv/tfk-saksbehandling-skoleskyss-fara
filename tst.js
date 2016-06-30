'use strict'
var transportByFara = require('./index')
var options = {
  skoleid: 3674,
  postnummer: '3810',
  gatenavn: 'Hetterudvegen',
  husnummer: 34
}
console.log(options.postnummer)
console.log(options.gatenavn)
console.log(options.husnummer)
console.log(transportByFara(options))
