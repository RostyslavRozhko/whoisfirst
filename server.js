
const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

// socket.io server
io.on('connection', function(socket){
  console.log('connected')
  socket.on('click', (msg) => {
    console.log('click')
    console.log(msg)
    io.emit('winner', msg)
  })

  socket.on('restart', () => {
    console.log('restart')
    io.emit('restart')
  })

  socket.on('disconnect', function(){
    console.log('user disconnected')
  })
})

nextApp.prepare().then(() => {
  app.get('/messages', (req, res) => {
    res.json(messages)
  })

  app.get('*', (req, res) => {
    return nextHandler(req, res)
  })

  server.listen(3002, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3002')
  })
})