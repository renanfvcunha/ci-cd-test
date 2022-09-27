import express from 'express'
import packageInfo from './package.json' assert { type: 'json' }

const app = express()

app.get('/', (req, res) => {
  return res.json({ message: 'API Working! Version 5!', version: packageInfo.version })
})

app.listen(3000, () => console.log('Listening at 3000'))
