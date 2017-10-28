import camelcase from 'lodash.camelcase'
import upperfirst from 'lodash.upperfirst'

const req = require.context('./components/', true, /\.js$/)

req.keys().forEach(modulePath => {
  let filename = modulePath.split('/').pop()

  if (filename === 'index.js') {
    filename = `${modulePath.match(/\.\/(.*)\//)[1]}.js`
  }

  const [name] = filename.match(/(.*)\.js$/)[1].split('.')

  module.exports[upperfirst(camelcase(name))] = req(modulePath).default
})
