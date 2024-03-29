import  http from 'node:http'
import { randomUUID } from 'node:crypto'
import { json } from './middlewares/json.js'
import { Database } from './database.js'
import { routes } from './routes.js'

// - HTTP
//   - Método HTTP
//   - URL

// Stateful - Stateless

// GET, POST, PUT, PATCH, DELETE

// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso no back-end

// JSON - JavaScript Object Notation

// Cabeçalhos (Requisição/Respota) => Metadados

// HTTP Status Code


// Query Parameters: URL Stateful => Filtros, paginação, não obrigatórios
// Route Parameters: Identificação de recursos
// Request Body: Envio de informações de um formulário (HTTPs)

// http://localhost:3333/users?userId=1&name=Ecthon
// GET http://localhost:3333/users/1
// POST http://localhost:3333/

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  const route = routes.find(route => {
    return route.method === method && route.path.test(url)
  })

  if (route) {
    const routeParams = req.url.match(route.path)

    const { query, ...params } = routeParams.groups
    req.params = params
    req.query = query ? extractQueryParams(query) : {}

    return route.handler(req, res)
  }

  return res.writeHead(404).end()
})

server.listen(3333)