const fs = require('fs')
fs.writeFileSync('./.env', `STRIPE_PUBLISHABLE_KEY=${process.env.STRIPE_PUBLISHABLE_KEY}\n`)