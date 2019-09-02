var resolve = require('rollup-plugin-node-resolve') // 让rollup可以寻找依赖包
var babel = require('rollup-plugin-babel') // babel转码ES6位ES5
var { uglify } = require('rollup-plugin-uglify') // 压缩代码

export default {
  input: 'src/index.js',
  output: {
    name: 'Router', // 当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下
    file: 'dist/router.js', // 生成文件路径
    format: 'umd', // 五种输出格式：amd /  es6 / iife / umd / cjs
    sourcemap: true // 生成bundle.map.js文件，方便调试
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
}
