'use strict'

var apiUrl = 'https://api.t-fk.no/postnummer/kommunenavn'
var generateDataFiles = require('./lib/generateDataFile')
var jobsToDo = 8
var jobsDone = 0

function areWeDoneYet () {
  jobsDone++
  if (jobsDone === jobsToDo) {
    console.log('Everything\'s shiny, Cap\'n. Not to fret.')
    process.exit(0)
  }
}

// generates files for Fyresdal, Kviteseid, Nissedal, Tokke og Vinje
generateDataFiles({apiUrl: apiUrl, queryList: ['Fyresdal', 'Kviteseid', 'Nissedal', 'Tokke', 'Vinje'], fileName: 'fyresdal_kviteseid_nissedal_tokke_vinje.json'}, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
  areWeDoneYet()
})

// generates files for Seljord, Kviteseid og Nissedal
generateDataFiles({apiUrl: apiUrl, queryList: ['Seljord', 'Kviteseid', 'Nissedal'], fileName: 'seljord_kviteseid_nissedal.json'}, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
  areWeDoneYet()
})

// generates files 3805, 3835 og 3840 Seljord
generateDataFiles({apiUrl: apiUrl, queryList: [], extras: [3805, 3835, 3840], fileName: 'seljord.json'}, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
  areWeDoneYet()
})

// generates files for 3830 og 3831 Ulefoss,  3810 og 3834 Gvarv, 3800, 3803 og 3833 Bø
generateDataFiles({apiUrl: apiUrl, queryList: [], extras: [3830, 3831, 3810, 3834, 3800, 3803, 3833], fileName: 'ulefoss_gvarv_bo.json'}, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
  areWeDoneYet()
})

// generates files for 3805, 3835 og 3840 Seljord samt 3836 og 3850 Kviteseid
generateDataFiles({apiUrl: apiUrl, queryList: [], extras: [3805, 3835, 3840, 3836, 3850], fileName: 'seljord_kviteseid.json'}, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
  areWeDoneYet()
})

// generates files for 3803 Bø, 3810 og 3834 Gvarv samt 3830 og 3831 Ulefoss
generateDataFiles({apiUrl: apiUrl, queryList: [], extras: [3803, 3810, 3830, 3831, 3834], fileName: 'bo_gvarv_ulefoss.json'}, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
  areWeDoneYet()
})

// generates files for 3800, 3803 og 3833 Bø, 3810 og 3834 Gvarv samt 3830 Ulefoss
generateDataFiles({apiUrl: apiUrl, queryList: [], extras: [3800, 3803, 3833, 3834, 3830], fileName: 'bo_gvarv_ulefoss_sove.json'}, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
  areWeDoneYet()
})

// Generates files for 3800, 3803 og 3833 Bø, 3830 og 3831 Ulefoss, 3810 og 3834 Gvarv
generateDataFiles({apiUrl: apiUrl, queryList: [], extras: [3800, 3803, 3833, 3830, 3831, 3810, 3834], fileName: 'bo_ulefoss_gvarv_grenland.json'}, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
  areWeDoneYet()
})
