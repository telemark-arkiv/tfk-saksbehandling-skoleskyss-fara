'use strict'

const tap = require('tap')
const isFara = require('../index')
var options = {
  skoleid: 3802,
  postnummer: '',
  gatenavn: 'Djevelgaten',
  husnummer: '666'
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

// Specials ----- Start
options.postnummer = 3803
options.gatenavn = 'Tjønnåsvegen'
options.husnummer = 2
tap.equal(isFara(options), true, 'Bø vgs returns true from Tjønnåsvegen 2 Bø i Telemark')

options.husnummer = 65
tap.equal(isFara(options), false, 'Bø vgs returns false from Tjønnåsvegen 65 Bø i Telemark')

options.gatenavn = 'Myhrevegen'
options.postnummer = 3803
options.husnummer = 151
tap.equal(isFara(options), true, 'Bø vgs returns true from Myhrevegen 151 Bø i Telemark')

options.husnummer = 154
tap.equal(isFara(options), false, 'Bø vgs returns false from Myhrevegen 154 Bø i Telemark')

options.gatenavn = 'Roevegen'
options.postnummer = 3803
options.husnummer = 4
tap.equal(isFara(options), true, 'Bø vgs returns true from Roevegen 4 Bø i Telemark')

options.husnummer = 200
tap.equal(isFara(options), false, 'Bø vgs returns false from Roevegen 200 Bø i Telemark')

options.gatenavn = 'Nyvollvegen'
options.postnummer = 3803
options.husnummer = 11
tap.equal(isFara(options), true, 'Bø vgs returns true from Nyvollvegen 11 Bø i Telemark')

options.husnummer = 22
tap.equal(isFara(options), false, 'Bø vgs returns false from Nyvollvegen 22 Bø i Telemark')

options.gatenavn = 'Lundevegen'
options.postnummer = 3803
options.husnummer = 120
tap.equal(isFara(options), true, 'Bø vgs returns true from Lundevegen 120 Bø i Telemark')

options.husnummer = 477
tap.equal(isFara(options), false, 'Bø vgs returns false from Lundevegen 477 Bø i Telemark')

options.gatenavn = 'Uvdalvegen'
options.postnummer = 3803
options.husnummer = 4
tap.equal(isFara(options), true, 'Bø vgs returns true from Uvdalvegen 4 Bø i Telemark')

options.husnummer = 835
tap.equal(isFara(options), false, 'Bø vgs returns false from Uvdalvegen 835 Bø i Telemark')

options.gatenavn = 'Dagstjønnvegen'
options.postnummer = 3803
options.husnummer = 10
tap.equal(isFara(options), true, 'Bø vgs returns true from Dagstjønnvegen 4 Bø i Telemark')

options.husnummer = 227
tap.equal(isFara(options), false, 'Bø vgs returns false from Dagstjønnvegen 227 Bø i Telemark')

options.gatenavn = 'Breskehaugbakken'
options.postnummer = 3803
options.husnummer = 1
tap.equal(isFara(options), true, 'Bø vgs returns true from Breskehaugbakken 1 Bø i Telemark')

options.husnummer = 72
tap.equal(isFara(options), false, 'Bø vgs returns false from Breskehaugbakken 72 Bø i Telemark')

options.gatenavn = 'Tjønnåsen'
options.postnummer = 3803
options.husnummer = 1
tap.equal(isFara(options), true, 'Bø vgs returns true from Tjønnåsen 1 Bø i Telemark')

options.husnummer = 9
tap.equal(isFara(options), false, 'Bø vgs returns false from Tjønnåsen 9 Bø i Telemark')

options.gatenavn = 'Stadskleivvegen'
options.postnummer = 3803
options.husnummer = 13
tap.equal(isFara(options), true, 'Bø vgs returns true from Stadskleivvegen 13 Bø i Telemark')

options.husnummer = 73
tap.equal(isFara(options), false, 'Bø vgs returns false from Stadskleivvegen 73 Bø i Telemark')

options.gatenavn = 'Skyttarvegen'
options.postnummer = 3803
options.husnummer = 1
tap.equal(isFara(options), true, 'Bø vgs returns true from Skyttarvegen 1 Bø i Telemark')

options.husnummer = 167
tap.equal(isFara(options), false, 'Bø vgs returns false from Skyttarvegen 167 Bø i Telemark')

options.gatenavn = 'Kyrkjevegen'
options.postnummer = 3803
options.husnummer = 129
tap.equal(isFara(options), true, 'Bø vgs returns true from Kyrkjevegen 129 Bø i Telemark')

options.husnummer = 170
tap.equal(isFara(options), false, 'Bø vgs returns false from Kyrkjevegen 170 Bø i Telemark')

options.gatenavn = 'Rokkemakervegen'
options.postnummer = 3803
options.husnummer = 10
tap.equal(isFara(options), true, 'Bø vgs returns true from Rokkemakervegen 10 Bø i Telemark')

options.husnummer = 82
tap.equal(isFara(options), false, 'Bø vgs returns false from Rokkemakervegen 82 Bø i Telemark')

// 3810 GVARV

options.gatenavn = 'Aslaksborgvegen'
options.postnummer = 3810
options.husnummer = 10
tap.equal(isFara(options), true, 'Bø vgs returns true from Aslaksborgvegen 10 Gvarv')

options.husnummer = 75
tap.equal(isFara(options), false, 'Bø vgs returns false from Aslaksborgvegen 75 Gvarv')

options.gatenavn = 'Beinstigen'
options.postnummer = 3810
options.husnummer = 1
tap.equal(isFara(options), true, 'Bø vgs returns true from Beinstigen 1 Gvarv')

options.husnummer = 5
tap.equal(isFara(options), false, 'Bø vgs returns false from Beinstigen 5 Gvarv')

options.gatenavn = 'Erik Werenskiolds veg'
options.postnummer = 3810
options.husnummer = 1
tap.equal(isFara(options), true, 'Bø vgs returns true from Aslaksborgvegen 1 Gvarv')

options.husnummer = 15
tap.equal(isFara(options), false, 'Bø vgs returns false from Aslaksborgvegen 15 Gvarv')

options.gatenavn = 'Gamlegata'
options.postnummer = 3810
options.husnummer = 3
tap.equal(isFara(options), true, 'Bø vgs returns true from Gamlegata 3 Gvarv')

options.husnummer = 57
tap.equal(isFara(options), false, 'Bø vgs returns false from Gamlegata 57 Gvarv')

options.gatenavn = 'Gunheimsvegen'
options.postnummer = 3810
options.husnummer = 1
tap.equal(isFara(options), true, 'Bø vgs returns true from Gunheimsvegen 1 Gvarv')

options.husnummer = 181
tap.equal(isFara(options), false, 'Bø vgs returns false from Gunheimsvegen 181 Gvarv')

options.gatenavn = 'Gvarvgata'
options.postnummer = 3810
options.husnummer = 1
tap.equal(isFara(options), true, 'Bø vgs returns true from Gvarvgata 1 Gvarv')

options.husnummer = 109
tap.equal(isFara(options), false, 'Bø vgs returns false from Gvarvgata 109 Gvarv')

options.gatenavn = 'Gåsefetbrinken'
options.postnummer = 3810
options.husnummer = 2
tap.equal(isFara(options), true, 'Bø vgs returns true from Gåsefetbrinken 2 Gvarv')

options.husnummer = 9
tap.equal(isFara(options), false, 'Bø vgs returns false from Gåsefetbrinken 9 Gvarv')

options.gatenavn = 'Gåsefetvegen'
options.postnummer = 3810
options.husnummer = 1
tap.equal(isFara(options), true, 'Bø vgs returns true from Gåsefetvegen 1 Gvarv')

options.husnummer = 24
tap.equal(isFara(options), false, 'Bø vgs returns false from Gåsefetvegen 24 Gvarv')

options.gatenavn = 'Hallenvegen'
options.postnummer = 3810
options.husnummer = 1
tap.equal(isFara(options), true, 'Bø vgs returns true from Hallenvegen 1 Gvarv')

options.husnummer = 131
tap.equal(isFara(options), false, 'Bø vgs returns false from Hallenvegen 131 Gvarv')

options.gatenavn = 'Haugenjordet'
options.postnummer = 3810
options.husnummer = 1
tap.equal(isFara(options), true, 'Bø vgs returns true from Haugenjordet 1 Gvarv')

options.husnummer = 13
tap.equal(isFara(options), false, 'Bø vgs returns false from Haugenjordet 13 Gvarv')

options.gatenavn = 'Holmenvegen'
options.postnummer = 3810
options.husnummer = 1
tap.equal(isFara(options), true, 'Bø vgs returns true from Holmenvegen 1 Gvarv')

options.husnummer = 91
tap.equal(isFara(options), false, 'Bø vgs returns false from Holmenvegen 91 Gvarv')

options.gatenavn = 'Hørtevegen'
options.postnummer = 3810
options.husnummer = 1
tap.equal(isFara(options), true, 'Bø vgs returns true from Hørtevegen 1 Gvarv')

options.husnummer = 500
tap.equal(isFara(options), false, 'Bø vgs returns false from Hørtevegen 500 Gvarv')

options.gatenavn = 'Ketil Skogens veg'
options.postnummer = 3810
options.husnummer = 1
tap.equal(isFara(options), true, 'Bø vgs returns true from Ketil Skogens veg 1 Gvarv')

options.husnummer = 19
tap.equal(isFara(options), false, 'Bø vgs returns false from Ketil Skogens veg 19 Gvarv')

options.gatenavn = 'Kåsingrenda'
options.postnummer = 3810
options.husnummer = 55
tap.equal(isFara(options), true, 'Bø vgs returns true from Kåsingrenda 55 Gvarv')

options.husnummer = 81
tap.equal(isFara(options), false, 'Bø vgs returns false from Kåsingrenda 81 Gvarv')

options.gatenavn = 'Leikvangvegen'
options.postnummer = 3810
options.husnummer = 100
tap.equal(isFara(options), true, 'Bø vgs returns true from Leikvangvegen 100 Gvarv')

options.husnummer = 193
tap.equal(isFara(options), false, 'Bø vgs returns false from Leikvangvegen 193 Gvarv')

options.gatenavn = 'Nesoddvegen'
options.postnummer = 3810
options.husnummer = 20
tap.equal(isFara(options), true, 'Bø vgs returns true from Nesoddvegen 20 Gvarv')

options.husnummer = 291
tap.equal(isFara(options), false, 'Bø vgs returns false from Nesoddvegen 291 Gvarv')

options.gatenavn = 'Nesvegen'
options.postnummer = 3810
options.husnummer = 2
tap.equal(isFara(options), true, 'Bø vgs returns true from Nesvegen 2 Gvarv')

options.husnummer = 34
tap.equal(isFara(options), false, 'Bø vgs returns false from Nesvegen 34 Gvarv')

options.gatenavn = 'Norsjøvegen'
options.postnummer = 3810
options.husnummer = 4
tap.equal(isFara(options), true, 'Bø vgs returns true from Norsjøvegen 4 Gvarv')

options.husnummer = 5
tap.equal(isFara(options), false, 'Bø vgs returns false from Norsjøvegen 5 Gvarv')

options.gatenavn = 'Notevarpvegen'
options.postnummer = 3810
options.husnummer = 1
tap.equal(isFara(options), true, 'Bø vgs returns true from Notevarpvegen 1 Gvarv')

options.husnummer = 17
tap.equal(isFara(options), false, 'Bø vgs returns false from Notevarpvegen 17 Gvarv')

options.gatenavn = 'Nyhussvingen'
options.postnummer = 3810
options.husnummer = 26
tap.equal(isFara(options), true, 'Bø vgs returns true from Nyhussvingen 26 Gvarv')

options.husnummer = 50
tap.equal(isFara(options), false, 'Bø vgs returns false from Nyhussvingen 50 Gvarv')

options.gatenavn = 'Nyhusvegen'
options.postnummer = 3810
options.husnummer = 5
tap.equal(isFara(options), true, 'Bø vgs returns true from Nyhusvegen 5 Gvarv')

options.husnummer = 18
tap.equal(isFara(options), false, 'Bø vgs returns false from Nyhusvegen 18 Gvarv')

options.gatenavn = 'Prestholtvegen'
options.postnummer = 3810
options.husnummer = 31
tap.equal(isFara(options), true, 'Bø vgs returns true from Prestholtvegen 31 Gvarv')

options.husnummer = 34
tap.equal(isFara(options), false, 'Bø vgs returns false from Prestholtvegen 34 Gvarv')

options.gatenavn = 'Sauheradvegen'
options.postnummer = 3810
options.husnummer = 111
tap.equal(isFara(options), true, 'Bø vgs returns true from Sauheradvegen 111 Gvarv')

options.husnummer = 206
tap.equal(isFara(options), false, 'Bø vgs returns false from Sauheradvegen 206 Gvarv')

options.gatenavn = 'Skrivarvegen'
options.postnummer = 3810
options.husnummer = 1
tap.equal(isFara(options), true, 'Bø vgs returns true from Skrivarvegen 1 Gvarv')

options.husnummer = 45
tap.equal(isFara(options), false, 'Bø vgs returns false from Skrivarvegen 45 Gvarv')

options.gatenavn = 'Steinsrudvegen'
options.postnummer = 3810
options.husnummer = 11
tap.equal(isFara(options), true, 'Bø vgs returns true from Steinsrudvegen 11 Gvarv')

options.husnummer = 67
tap.equal(isFara(options), false, 'Bø vgs returns false from Steinsrudvegen 67 Gvarv')

options.gatenavn = 'Sætersbøvegen'
options.postnummer = 3810
options.husnummer = 6
tap.equal(isFara(options), true, 'Bø vgs returns true from Sætersbøvegen 6 Gvarv')

options.husnummer = 52
tap.equal(isFara(options), false, 'Bø vgs returns false from Sætersbøvegen 52 Gvarv')

// Her er det to tester av samme vei fordi husnummer 257 ligger i 3811 HØRTE som i denne testen skal være false

options.gatenavn = 'Sætrevegen'
options.postnummer = 3810
options.husnummer = 42
tap.equal(isFara(options), true, 'Bø vgs returns true from Sætrevegen 42 Gvarv')

options.husnummer = 257
tap.equal(isFara(options), false, 'Bø vgs returns false from Sætrevegen 257 Gvarv')

options.gatenavn = 'Sætrevegen'
options.postnummer = 3810
options.husnummer = 258
tap.equal(isFara(options), true, 'Bø vgs returns true from Sætrevegen 258 Gvarv')

options.husnummer = 259
tap.equal(isFara(options), false, 'Bø vgs returns false from Sætrevegen 259 Gvarv')

options.gatenavn = 'Sætrevegen'
options.postnummer = 3810
options.husnummer = 258
tap.equal(isFara(options), true, 'Bø vgs returns true from Sætrevegen 258 Gvarv')

options.husnummer = 259
tap.equal(isFara(options), false, 'Bø vgs returns false from Sætrevegen 259 Gvarv')

options.gatenavn = 'Tangenvegen'
options.postnummer = 3810
options.husnummer = 4
tap.equal(isFara(options), true, 'Bø vgs returns true from Tangenvegen 4 Gvarv')

options.husnummer = 31
tap.equal(isFara(options), false, 'Bø vgs returns false from Tangenvegen 31 Gvarv')

options.gatenavn = 'Tinghaugvegen'
options.postnummer = 3810
options.husnummer = 1
tap.equal(isFara(options), true, 'Bø vgs returns true from Tinghaugvegen 1 Gvarv')

options.husnummer = 106
tap.equal(isFara(options), false, 'Bø vgs returns false from Tinghaugvegen 106 Gvarv')

options.gatenavn = 'Torkild Gunnheims veg'
options.postnummer = 3810
options.husnummer = 1
tap.equal(isFara(options), true, 'Bø vgs returns true from Torkild Gunnheims veg 1 Gvarv')

options.husnummer = 4
tap.equal(isFara(options), false, 'Bø vgs returns false from Torkild Gunnheims veg 4 Gvarv')

options.gatenavn = 'Torshølvegen'
options.postnummer = 3810
options.husnummer = 2
tap.equal(isFara(options), true, 'Bø vgs returns true from Torshølvegen 2 Gvarv')

options.husnummer = 15
tap.equal(isFara(options), false, 'Bø vgs returns false from Torshølvegen 15 Gvarv')

options.gatenavn = 'Underbergåsen'
options.postnummer = 3810
options.husnummer = 1
tap.equal(isFara(options), true, 'Bø vgs returns true from Underbergåsen 1 Gvarv')

options.husnummer = 19
tap.equal(isFara(options), false, 'Bø vgs returns false from Underbergåsen 19 Gvarv')

options.gatenavn = 'Vestre Prestholdt'
options.postnummer = 3810
options.husnummer = 5
tap.equal(isFara(options), true, 'Bø vgs returns true from Vestre Prestholdt 5 Gvarv')

options.husnummer = 42
tap.equal(isFara(options), false, 'Bø vgs returns false from Vestre Prestholdt 42 Gvarv')

options.gatenavn = 'Øyanevegen'
options.postnummer = 3810
options.husnummer = 58
tap.equal(isFara(options), true, 'Bø vgs returns true from Øyanevegen 58 Gvarv')

options.husnummer = 93
tap.equal(isFara(options), false, 'Bø vgs returns false from Øyanevegen 93 Gvarv')

options.gatenavn = 'Åsåresvegen'
options.postnummer = 3810
options.husnummer = 31
tap.equal(isFara(options), true, 'Bø vgs returns true from Åsåresvegen 31 Gvarv')

options.husnummer = 146
tap.equal(isFara(options), false, 'Bø vgs returns false from Åsåresvegen 146 Gvarv')

options.gatenavn = 'Bøvegen'
options.postnummer = 3810
options.husnummer = 185
tap.equal(isFara(options), true, 'Bø vgs returns true from Åsåresvegen 31 Gvarv')

options.husnummer = 318
tap.equal(isFara(options), false, 'Bø vgs returns false from Åsåresvegen 146 Gvarv')

// Specials ----- End
