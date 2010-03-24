get('/user/:id', function(id){
  this.render('user.haml.html', {
    locals: {
      user: { id: id, name: 'tj' }
    }
  })
})