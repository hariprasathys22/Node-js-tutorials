 const http = require('http');
 const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end(`<h1>This is the homepage design`)
    }
    if(req.url === '/about'){
        res.end('Hp')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We cant find it 404 error</p>
    <a href='/'>back home</a>
    `)
 })
 server.listen(5000);