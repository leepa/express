get('/', function(){
  this.contentType('html')
  return '<h1>Welcome To Express</h1>'
})

run()