exports.AsyncDependencyExample = Plugin.extend({
  on: {
    request: function(event, callback) {
      someAsyncFunction(function(){
        callback()
      })
      return true  
    }
  }
})