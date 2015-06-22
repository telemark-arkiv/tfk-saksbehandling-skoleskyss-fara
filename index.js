'use strict';

function transportByFara(options) {
  if (!options) {
    return new Error('Missing required input: options object');
  }
  if (!options.postnummer) {
    return new Error('Missing required input: options.postnummer');
  }
  if (!options.skoleid) {
    return new Error('Missing required input: options.skoleid');
  }

  var skoleSkienPgr = require('./lib/data/skoleids_skien_pgr.json');
  var skoleBo = require('./lib/data/skoleids_bo.json');
  var skoleBoNome = require('./lib/data/skoleids_bo_nome.json');
  var skoleSeljord = require('./lib/data/skoleids_seljord.json');
  var skoleSove = require('./lib/data/skoleids_sove.json');
  var skoleVestTelemark = require('./lib/data/skoleids_vest_telemark.json');

  var postnrBoGvarvUlefoss = require('./lib/data/bo_gvarv_ulefoss.json');
  var postnrBoGvarvUlefossSove = require('./lib/data/bo_gvarv_ulefoss_sove.json');
  var postnrBoUlefossGvarvGrenland = require('./lib/data/bo_ulefoss_gvarv_grenland.json');
  var postnrFyresdalKviteseidNissedalTokkeVinje = require('./lib/data/fyresdal_kviteseid_nissedal_tokke_vinje.json');
  var postnrSeljord = require('./lib/data/seljord.json');
  var postnrSeljordKviteseid = require('./lib/data/seljord_kviteseid.json');
  var postnrUlefossGvarvBo = require('./lib/data/ulefoss_gvarv_bo.json');
  var skoleid = parseInt(options.skoleid, 10);
  var postnummer = parseInt(options.postnummer, 10);


  //Skole - Vest-Telemark vgs.-(Begge avdelinger.) Alle postnummer i Fyresdal, Kviteseid, Nissedal, Tokke og Vinje -> false
  if (skoleVestTelemark.indexOf(skoleid) > -1 && postnrFyresdalKviteseidNissedalTokkeVinje.indexOf(postnummer) > -1) {
    return true;
  }

  //Skole Vest-Telemark vgs-(Begge avdelinger) Postnummer 3805, 3835 og 3840 Seljord -> false
  if (skoleVestTelemark.indexOf(skoleid) > -1 && postnrSeljord.indexOf(postnummer) > -1) {
    return false;
  }

  //Skole Vest-Telemark vgs (Seljord) Postnummer 3830 og 3831 Ulefoss,  3810 og 3834 Gvarv, 3800, 3803 og 3833 Bø -> false
  if (skoleSeljord.indexOf(skoleid) > -1 && postnrUlefossGvarvBo.indexOf(postnummer) > -1) {
    return false;
  }

  //Skole Bø vgs. og Nome vgs.-(Begge avdelinger.) Postnummer 3805, 3835 og 3840 Seljord samt 3836 og 3850 Kviteseid -> false
  if (skoleBoNome.indexOf(skoleid) > -1 && postnrSeljordKviteseid.indexOf(postnummer) > -1) {
    return false;
  }

  //Skole Bø vgs, Postnummer 3803 Bø, 3810 og 3834 Gvarv samt 3830 og 3831 Ulefoss -> false
  if (skoleBo.indexOf(skoleid) > -1 && postnrBoGvarvUlefoss.indexOf(postnummer) > -1) {
    return false;
  }

  //Skole Nome vgs.-(avd. Søve), Postnummer 3800, 3803 og 3833 Bø, 3810 og 3834 Gvarv samt 3830 Ulefoss -> false
  if (skoleSove.indexOf(skoleid) > -1 && postnrBoGvarvUlefossSove.indexOf(postnummer) > -1) {
    return false;
  }

  //ALLE de 8 vgs.-skolene i Skien og Porsgrunn. Postnummer 3800, 3803 og 3833 Bø, 3830 og 3831 Ulefoss, 3810 og 3834 Gvarv -> false
  if (skoleSkienPgr.indexOf(skoleid) > -1 && postnrBoUlefossGvarvGrenland.indexOf(postnummer) > -1) {
    return false;
  }

  //Alt annet gir true
  return true;

}

module.exports = transportByFara;