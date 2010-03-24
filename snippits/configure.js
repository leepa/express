configure(function(){
  sys.puts('all')
})

configure('test', function(){
  sys.puts('test')
})

configure('foo', function(){
  sys.puts('foo')
})

configure('test')
// => "all"
// => "test"

configure('foo')
// => "all"
// => "foo"