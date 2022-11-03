import { Router } from 'express'

const routes = new Router()

routes.get('/', (request, response) => {
  return response.json({ msg: 'Teste ok!' })
})

export default routes
