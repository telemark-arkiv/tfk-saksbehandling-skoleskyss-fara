'use strict'

const tap = require('tap')
const isFara = require('../index')
var options = {
  skoleid: 3730,
  postnummer: '',
  gatenavn: 'Djevelgaten',
  husnummer: '666'
}

options.postnummer = 3960
tap.equal(isFara(options), true, 'Hjalmar vgs, avdeling Klosterskogen returns true from 3960 Stathelle')

options.postnummer = 3800
tap.equal(isFara(options), false, 'Hjalmar vgs, avdeling Klosterskogen returns false from 3800 Bø i Telemark')

options.postnummer = 3750
tap.equal(isFara(options), true, 'Hjalmar vgs, avdeling Klosterskogen returns ture from 3750 Drangedal')

options.postnummer = 3830
tap.equal(isFara(options), false, 'Hjalmar vgs, avdeling Klosterskogen returns false from 3830 Ulefoss')

options.postnummer = 3672
tap.equal(isFara(options), true, 'Hjalmar vgs, avdeling Klosterskogen returns true from 3672 Notodden')

options.postnummer = 3810
tap.equal(isFara(options), false, 'Hjalmar vgs, avdeling Klosterskogen returns false from 3810 Gvarv')

options.postnummer = 3812
tap.equal(isFara(options), true, 'Hjalmar vgs, avdeling Klosterskogen returns true from 3812 Akkerhaugen')

options.postnummer = 3805
tap.equal(isFara(options), false, 'Hjalmar vgs, avdeling Klosterskogen returns false from 3805 Bø i Telemark')

options.postnummer = 3840
tap.equal(isFara(options), false, 'Hjalmar vgs, avdeling Klosterskogen returns false from 3840 Seljord')

options.postnummer = 3841
tap.equal(isFara(options), false, 'Hjalmar vgs, avdeling Klosterskogen returns false from 3841 Flatdal')

options.postnummer = 3748
tap.equal(isFara(options), true, 'Hjalmar vgs, avdeling Klosterskogen returns true from 3748 Siljan')

