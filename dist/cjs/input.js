'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

require('./chunk-14c82365.js')
require('./helpers.js')
require('./chunk-1bb51959.js')
require('./chunk-8ffb4dee.js')
require('./chunk-a3ebdb68.js')
var __chunk_5 = require('./chunk-13e039f5.js')
var __chunk_6 = require('./chunk-1e15a2e5.js')

var Plugin = {
    install: function install(Vue) {
        __chunk_5.registerComponent(Vue, __chunk_6.Input)
    }
}
__chunk_5.use(Plugin)

exports.BInput = __chunk_6.Input
exports.default = Plugin
