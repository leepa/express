configure(function(){
  use(require('express/plugins/view').View)
  use(require('express/plugins/cache').Cache)
  use(require('express/plugins/redirect').Redirect)
  use(require('express/plugins/body-decoder').BodyDecoder)
})
 
configure('development', function(){
  enable('helpful 404')
  enable('show exceptions')
})
 
configure('test', function(){
  enable('throw exceptions')
})
 
configure('production', function(){
  enable('cache view contents')
  enable('cache view partials')
  enable('cache static files')
})