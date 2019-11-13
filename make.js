/* eslint-disable no-template-curly-in-string */
const b = require('substance-bundler')
const path = require('path')
const vfs = require('substance-bundler/extensions/vfs')

const DIST = 'dist/'

b.task('default', ['vfs'])

b.task('clean', function () {
  b.rm(DIST + 'vfs/vfs.js')
}).describe('removes all generated files and folders.')

b.task('vfs', () => {
  vfs(b, {
    src: ['./reference-manuscripts/manuscripts/**/*.xml'],
    dest: DIST + 'vfs/vfs.js',
    format: 'umd',
    moduleName: 'vfs',
    rootDir: path.join(__dirname, 'reference-manuscripts/manuscripts')
  })
})