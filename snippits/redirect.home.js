post('/login', function(){
  if (authenticationWasSuccessful)
    this.redirect('home')
})