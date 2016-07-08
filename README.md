[![Build Status](https://travis-ci.org/telemark/tfk-saksbehandling-skoleskyss-fara.svg?branch=master)](https://travis-ci.org/telemark/tfk-saksbehandling-skoleskyss-fara)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-saksbehandling-skoleskyss-fara/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-saksbehandling-skoleskyss-fara?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# tfk-saksbehandling-skoleskyss-fara
Node-module for identifying FARA as transporter.

It uses a combination of zipcodes and schoolids.

## Installation
From GitHub

```sh
$ git clone git@github.com:telemark/tfk-saksbehandling-skoleskyss-fara.git
```

cd into the directory and run the setup script

```sh
$ npm run setup
```

This will install the module dependencies and generate the zipcode files

## Usage
Pass in an options object and get true or false in return.

**postnummer** zipcode, required

**skole** schoolid, required

```javascript

'use strict';

var transportByFara = require('tfk-saksbehandling-skoleskyss-fara');
var options = {
  postnummer: 3681,
  skoleid: 3880
};

console.log(transportByFara(options)); //Returns true

```

The logic is explained in the [docs/rules.md](https://github.com/telemark/tfk-saksbehandling-skoleskyss-fara/blob/master/docs/rules.md)

The complete list of schoolids is in [lib/data/skoleliste_full.json](https://github.com/telemark/tfk-saksbehandling-skoleskyss-fara/blob/master/lib/data/skoleliste_full.json)

## Test

```sh
$ npm test
```