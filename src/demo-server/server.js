let http = require('http')
let url = require('url')
let util = require('util')
let fs = require('fs')

let server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain; charset=uft-8')
  let pathname = url.parse(req.url).pathname
  console.log(pathname)

  fs.readFile(pathname.substring(1), function(err, data) {
    if (err) {
      res.writeHead(404, {
        'Content-Type': 'text/html; charset=uft-8'
      })
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=uft-8'
      })
      res.write(data.toString())
    }
    res.end()
  })
})

server.listen('5201', '127.0.0.1', () => {
  console.log('listening at http://127.0.0.1:5201/')
})