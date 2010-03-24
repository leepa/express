get('/user/:id', function(id){
  this.render('user.haml.html', {
    context: { id: id, name: 'tj' }
  })
})