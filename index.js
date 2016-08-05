'use strict'

module.exports = function transportByFara (options) {
  if (!options) {
    throw new Error('Missing required input: options object')
  }
  if (!options.postnummer) {
    throw new Error('Missing required input: options.postnummer')
  }
  if (!options.skoleid) {
    throw new Error('Missing required input: options.skoleid')
  }
  if (!options.gatenavn) {
    throw new Error('Missing required input: options.gatenavn')
  }
  if (!options.husnummer) {
    throw new Error('Missing required input: options.husnummer')
  }

  const basePath = require('path').resolve(__dirname)
  const isFile = require('is-file')
  const skoleid = parseInt(options.skoleid, 10)
  const fileName = basePath + '/lib/data/' + skoleid + '.json'
  const fileNameSpecials = basePath + '/lib/data/specials/' + skoleid + '.json'
  const postnummer = parseInt(options.postnummer, 10)
  const gatenavn = options.gatenavn
  const husnummer = parseInt(options.husnummer, 10)

  // Sjekk for spesial gater og husnummer
  if (isFile(fileNameSpecials)) {
    const specials = require(fileNameSpecials)
    if (specials[postnummer.toString()]) {
      var isSnowflake = false
      specials[postnummer.toString()].forEach(function (item) {
        if (item.name.toLowerCase() === gatenavn.toLowerCase()) {
          if (item.range.min <= husnummer && husnummer <= item.range.max) {
            isSnowflake = true
          }
        }
      })
      if (isSnowflake) {
        return true
      }
    }
  }
  // Vanlig sjekk på postnummer
  if (isFile(fileName)) {
    const zips = require(fileName)
    return zips.indexOf(postnummer) > -1
  } else {
    return false
  }
}
