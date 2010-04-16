
require.paths.unshift('lib')
var ex = require('express')

var messages = [],
    utils = require('express/utils'),
    http = require('express/http')
    
ex.configure(function(){
  ex.use(ex.Logger)
  ex.use(ex.MethodOverride)
  ex.use(ex.ContentLength)
  ex.use(ex.Cookie)
  ex.use(ex.Cache, { lifetime: (5).minutes, reapInterval: (1).minute })
  ex.use(ex.Session, { lifetime: (15).minutes, reapInterval: (1).minute })
  ex.use(ex.Static)
  ex.set('root', __dirname)
})

ex.get('/', function(){ 
  this.pass('/chat')
})

ex.get('/chat', function(){
  var self = this
  ex.Session.store.length(function(err, len){
    self.render('chat.html.haml', {
      locals: {
        title: 'Chat',
        messages: messages,
        name: self.session.name,
        usersOnline: len
      }
    })
  })
})

ex.post('/chat', function(){
  this.session.name = this.param('name')
  messages
    .push(utils.escape(this.param('name')) + ': ' + utils.escape(this.param('message'))
    .replace(/(http:\/\/[^\s]+)/g, '<a href="$1" target="express-chat">$1</a>')
    .replace(/:\)/g, '<img src="http://icons3.iconfinder.netdna-cdn.com/data/icons/ledicons/emoticon_smile.png">'))
  this.halt(200)
})

ex.get('/chat/messages', function(){
  var self = this,
      previousLength = messages.length,
      timer = setInterval(function(){
    if (messages.length > previousLength)
      self.contentType('json'),
      previousLength = messages.length,
      self.halt(200, JSON.encode(messages)),
      clearInterval(timer)
  }, 100)
})

ex.get('/*.css', function(file){
  this.render(file + '.css.sass', { layout: false })
})

ex.get('/error/view', function(){
  this.render('does.not.exist')
})

ex.get('/error', function(){
  throw new Error('oh noes!')
})

ex.get('/simple', function(){
  return 'Hello :)'
})

ex.get('/favicon.ico', function(){
  this.halt()
})

ex.run()