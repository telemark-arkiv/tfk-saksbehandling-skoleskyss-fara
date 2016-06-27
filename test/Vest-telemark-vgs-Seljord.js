'use strict'

const tap = require('tap')
const isFara = require('../index')
var options = {
  skoleid: 3840,
  postnummer: ''
}

options.postnummer = 3960
tap.equal(isFara(options), true, 'Vest-telemark-vgs-Seljord returns true from 3960 Stathelle')

options.postnummer = 3800
tap.equal(isFara(options), false, 'Vest-telemark-vgs-Seljord returns false from 3800 Bø i Telemark')

options.postnummer = 3801
tap.equal(isFara(options), true, 'Vest-telemark-vgs-Seljord returns true from 3801 Bø i Telemark')

options.postnummer = 3803
tap.equal(isFara(options), false, 'Vest-telemark-vgs-Seljord returns false from 3803 Bø i Telemark')

options.postnummer = 3750
tap.equal(isFara(options), true, 'Vest-telemark-vgs-Seljord returns true from 3750 Drangedal')

options.postnummer = 3848
tap.equal(isFara(options), false, 'Vest-telemark-vgs-Seljord returns false from 3848 Morgedal')

options.postnummer = 3854
tap.equal(isFara(options), true, 'Vest-telemark-vgs-Seljord returns true from 3854 Nissedal')

options.postnummer = 3830
tap.equal(isFara(options), false, 'Vest-telemark-vgs-Seljord returns false from 3830 Ulefoss')

options.postnummer = 3831
tap.equal(isFara(options), false, 'Vest-telemark-vgs-Seljord returns false from 3831 Ulefoss')

options.postnummer = 3672
tap.equal(isFara(options), true, 'Vest-telemark-vgs-Seljord returns true from 3672 Notodden')

options.postnummer = 3805
tap.equal(isFara(options), false, 'Vest-telemark-vgs-Seljord returns false from 3805 Bø i Telemark')

options.postnummer = 3748
tap.equal(isFara(options), true, 'Vest-telemark-vgs-Seljord returns true from 3748 Siljan')

options.postnummer = 3729
tap.equal(isFara(options), false, 'Vest-telemark-vgs-Seljord returns false from 3729 Skien')

options.postnummer = 3652
tap.equal(isFara(options), true, 'Vest-telemark-vgs-Seljord returns true from 3652 Hoving i Telemark')

options.postnummer = 3891
tap.equal(isFara(options), false, 'Vest-telemark-vgs-Seljord returns false from 3891 Høydalsmo')

options.postnummer = 3884
tap.equal(isFara(options), true, 'Vest-telemark-vgs-Seljord returns true from 3884 Rauland')

options.postnummer = 3890
tap.equal(isFara(options), false, 'Vest-telemark-vgs-Seljord returns false from 3890 Vinje')

options.postnummer = 3893
tap.equal(isFara(options), true, 'Vest-telemark-vgs-Seljord returns true from 3893 Vinjesvingen')
