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
options.husnummer = '70'
tap.equal(isFara(options), true, 'Nome vgs, avdeling Lunde returns true from 3803 Rokkemakervegen')

options.gatenavn = 'Tjønnåsvegen'
options.husnummer = '60'
tap.equal(isFara(options), true, 'Nome vgs, avdeling Lunde returns true from 3803 Tjønnåsvegen')

options.gatenavn = 'Myhrevegen'
options.husnummer = '151'
tap.equal(isFara(options), true, 'Nome vgs, avdeling Lunde returns true from 3803 Myhrevegen')

options.gatenavn = 'Roevegen'
tap.equal(isFara(options), true, 'Nome vgs, avdeling Lunde returns true from 3803 Roevegen')

options.gatenavn = 'Nyvollvegen'
options.husnummer = '12'
tap.equal(isFara(options), true, 'Nome vgs, avdeling Lunde returns true from 3803 Nyvollvegen')

options.gatenavn = 'Lundevegen'
options.husnummer = '126'
tap.equal(isFara(options), true, 'Nome vgs, avdeling Lunde returns true from 3803 Lundevegen')

options.gatenavn = 'Uvdalvegen'
tap.equal(isFara(options), true, 'Nome vgs, avdeling Lunde returns true from 3803 Uvdalvegen')

options.gatenavn = 'Dagstjønnvegen'
tap.equal(isFara(options), true, 'Nome vgs, avdeling Lunde returns true from 3803 Dagstjønnvegen')

options.gatenavn = 'Breskehaugbakken'
options.husnummer = '60'
tap.equal(isFara(options), true, 'Nome vgs, avdeling Lunde returns true from 3803 Breskehaugbakken')

options.gatenavn = 'Tjønnåsen'
options.husnummer = '6'
tap.equal(isFara(options), true, 'Nome vgs, avdeling Lunde returns true from 3803 Tjønnåsen')

options.gatenavn = 'Stadskleivvegen'
options.husnummer = '15'
tap.equal(isFara(options), true, 'Nome vgs, avdeling Lunde returns true from 3803 Stadskleivvegen')

options.gatenavn = 'Skyttarvegen'
tap.equal(isFara(options), true, 'Nome vgs, avdeling Lunde returns true from 3803 Skyttarvegen')

options.gatenavn = 'Kyrkjevegen'
options.husnummer = '169'
tap.equal(isFara(options), true, 'Nome vgs, avdeling Lunde returns true from 3803 Kyrkjevegen')

// Hovedregel for 3801, 3803, 3810 og 3830 er SANN FARA - Samme på Specials
