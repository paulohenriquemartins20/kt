const http = require('http')
const fs = require('fs')


const port = 3000;

const server = http.createServer((req, res) => {
    const urlinfo = require('url').parse(req.url, true)
    const name = urlinfo.query.name
    if (!name) {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, 'contenty-Type', 'text/html')
            res.write(data)
            return res.end()
        })
    } else {
        fs.writeFile('ph222.txt', name, function(err, data) {
            res.writeHead(302, {
                Location: '/',
            })
            return res.end()
        })
    }
})

server.listen(port, () => {
    console.log('serv')
})
