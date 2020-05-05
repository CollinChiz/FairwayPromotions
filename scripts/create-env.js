const fs = require('fs')
fs.writeFileSync('./.env', `GATSBY_STRIPE_PUBLISHABLE_KEY=${process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}\n`)