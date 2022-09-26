import fastify from 'fastify'
import packageInfo from './package.json' assert { type: 'json' }

const app = fastify()

app.get('/', async () => {
  return { message: 'API Working!', version: packageInfo.version }
})

app.listen({
  port: 3000
})
