
// Express - Plugins - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

exports.merge({
  Hooks: require('express/plugins/hooks').Hooks,
  Static: require('express/plugins/static').Static,
  Flash: require('express/plugins/flash').Flash,
  Cache: require('express/plugins/cache').Cache,
  Cookie: require('express/plugins/cookie').Cookie,
  Session: require('express/plugins/session').Session,
  Logger: require('express/plugins/logger').Logger,
  ContentLength: require('express/plugins/content-length').ContentLength,
  MethodOverride: require('express/plugins/method-override').MethodOverride
})