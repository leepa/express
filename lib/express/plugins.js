
// Express - Plugins - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

exports.merge({
  View: require('express/plugins/view').View,
  Hooks: require('express/plugins/hooks').Hooks,
  Flash: require('express/plugins/flash').Flash,
  Cache: require('express/plugins/cache').Cache,
  Static: require('express/plugins/static').Static,
  Cookie: require('express/plugins/cookie').Cookie,
  Logger: require('express/plugins/logger').Logger,
  Session: require('express/plugins/session').Session,
  Redirect: require('express/plugins/redirect').Redirect,
  BodyDecoder: require('express/plugins/body-decoder').BodyDecoder,
  ContentLength: require('express/plugins/content-length').ContentLength,
  MethodOverride: require('express/plugins/method-override').MethodOverride
})