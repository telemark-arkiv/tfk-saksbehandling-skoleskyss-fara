'use strict'

const tap = require('tap')
const isFara = require('../index')
var options = {
  skoleid: 3802,
  postnummer: ''
}

options.postnummer = 3960
tap.equal(isFara(options), true, 'Bø vgs returns true from 3960 Stathelle')

options.postnummer = 3803
tap.equal(isFara(options), false, 'Bø vgs returns false from 3803 Bø i Telemark')

options.postnummer = 3750
tap.equal(isFara(options), true, 'Bø vgs returns true from 3750 Drangedal')

options.postnummer = 3830
tap.equal(isFara(options), false, 'Bø vgs returns false from 3830 Ulefoss')

options.postnummer = 3671
tap.equal(isFara(options), true, 'Bø vgs returns true from 3671 Notodden')

options.postnummer = 3805
tap.equal(isFara(options), false, 'Bø vgs returns false from 3805 Bø i Telemark')

options.postnummer = 3835
tap.equal(isFara(options), true, 'Bø vgs returns true from 3835 Seljord')

options.postnummer = 3840
tap.equal(isFara(options), false, 'Bø vgs returns false from 3840 Seljord')

options.postnummer = 3841
tap.equal(isFara(options), true, 'Bø vgs returns true from 3841 Faltdal')

options.postnummer = 3729
tap.equal(isFara(options), false, 'Bø vgs returns false from 3729 Skien')

options.postnummer = 3652
tap.equal(isFara(options), true, 'Bø vgs returns true from 3652 Hovin i Telemark')
