const http=require('http')
const routes=require('./routes');//pointing to routes file
const server=http.createServer(routes.handler);
console.log(routes.someText);
server.listen(3000);