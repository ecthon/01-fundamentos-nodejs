// middlera -> interceptador = sempre vão receber o "req" e o "res" e eles serão
// tratados/transformados

export async function json(req, res) {
  const buffers = []
  for await (const chunk of req) {
    buffers.push(chunk)
  }
  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch {
    req.body = null
  }

  res.setHeader('Content-type', 'application/json')
}