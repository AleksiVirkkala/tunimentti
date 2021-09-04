// Inside vue.config.js
module.exports = {
  pwa: {
    name: 'Tunimentti',
    themeColor: '#5200a3'
  },

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },

  transpileDependencies: [ 'quasar' ]
}
