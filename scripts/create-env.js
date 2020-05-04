const fs = require('fs')
fs.writeFileSync('./.env', `API_KEY=${process.env.STRIPE_PUBLISHABLE_KEY}\n`)