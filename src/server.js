import  http from 'node:http'

// - HTTP
//   - Método HTTP
//   - URL

// GET, POST, PUT, PATCH, DELETE

// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso no back-end

// JSON - JavaScript Object Notation

// Cabeçalhos (Requisição/Respota) => Metadados

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  if(method === 'GET' && url === '/users') {
    return res
    .setHeader('Content-type', 'application/json')
    .end(JSON.stringify(users))
  }

  if(method === 'POST' && url === '/users') {
    users.push({
      id:1,
      name: 'ecthon',
      email: 'ecthon@email.com'
    })
    return res.end('Criação de usuário')
  }

  return res.end('Hello World!')
})

server.listen(3333)