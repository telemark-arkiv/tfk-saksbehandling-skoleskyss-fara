'use strict'

const tap = require('tap')
const isFara = require('../index')
var options = {
  skoleid: 3830,
  postnummer: ''
}

options.postnummer = 3960
tap.equal(isFara(options), true, 'Nome vgs, avdeling Søve returns true from 3960 Stathelle')

options.postnummer = 3800
tap.equal(isFara(options), false, 'Nome vgs, avdeling Søve returns false from 3800 Bø i Telemark')

options.postnummer = 3801
tap.equal(isFara(options), true, 'Nome vgs, avdeling Søve returns true from 3801 Bø i Telemark')

options.postnummer = 3803
tap.equal(isFara(options), false, 'Nome vgs, avdeling Søve returns false from 3803 Bø i Telemark')

options.postnummer = 3750
tap.equal(isFara(options), true, 'Nome vgs, avdeling Søve returns true from 3750 Drangedal')

options.postnummer = 3830
tap.equal(isFara(options), false, 'Nome vgs, avdeling Søve returns false from 3830 Ulefoss')

options.postnummer = 3672
tap.equal(isFara(options), true, 'Nome vgs, avdeling Søve returns true from 3672 Notodden')

options.postnummer = 3840
tap.equal(isFara(options), false, 'Nome vgs, avdeling Søve returns false from 3672 Seljord')

options.postnummer = 3841
tap.equal(isFara(options), false, 'Nome vgs, avdeling Søve returns false from 3672 Flatdal')

options.postnummer = 3748
tap.equal(isFara(options), true, 'Nome vgs, avdeling Søve returns true from 3748 Siljan')

options.postnummer = 3729
tap.equal(isFara(options), false, 'Nome vgs, avdeling Søve returns false from 3729 Skien')

options.postnummer = 3652
tap.equal(isFara(options), true, 'Nome vgs, avdeling Søve returns true from 3652 Hoving i Telemark')

