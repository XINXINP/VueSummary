<!--
 * @Descripttion: 🐉 vue准备工作—前置知识
 * @Author: xinxin
 * @Date: 2020-03-25 21:49:30
 * @LastEditTime: 2020-03-26 00:07:06
 -->
 ## 认识flow
 - 静态模板检测工具 （facebook）
 -- 检测方式
 --- 声明好检测
 --- 自己预测
 ## 看package.json
 Karma: npm查了一下，用于在多个平台测试js代码
 rollup：vue的构建工具
 Uglify：简化js和css文件，将js压缩成min.js
 zlib: zlib 是通用的压缩库，提供了一套 in-memory 压缩和解压函数，并能检测解压出来的数据的完整性(integrity)。zlib 也支持
 读写 gzip (.gz) 格式的文件
 TARGET=weex-framework rollup -w -c build/config.js: 在同一个文件选择不同的脚本
 ```javaScript
//补充一些参数，添加一些参数
//遵循rollup构建规则
function genConfig (opts) {
  const config = {
    entry: opts.entry,
    dest: opts.dest,
    external: opts.external,
    format: opts.format,
    banner: opts.banner,
    moduleName: 'Vue',
    plugins: [
      replace({
        __WEEX__: !!opts.weex,
        __WEEX_VERSION__: weexVersion,
        __VERSION__: version
      }),
      flow(),
      buble(),
      alias(Object.assign({}, require('./alias'), opts.alias))
    ]
  }

  if (opts.env) {
    config.plugins.push(replace({
      'process.env.NODE_ENV': JSON.stringify(opts.env)
    }))
  }

  return config
}
if (process.env.TARGET) {
  module.exports = genConfig(builds[process.env.TARGET])//.导出build的字段
}
 ```
 ## 分析build.js
 process.argv: 属性返回一个数组，这个数组包含了启动Node.js进程时的命令行参数
 fs.mkdirAsync：同步创建文件
 filter():返回一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
 注意：filter() 不会对空数组进行检测，不会改变原始数组。
 some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
 some()方法会依次执行数组的每个元素：
 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
 如果没有满足条件的元素，则返回false。
 slice(): 方法可从已有的数组中返回选定的元素
 ## 看alias.js
 ```javaScript
  vue: path.resolve(__dirname, '../src/entries/web-runtime-with-compiler'),
  compiler: path.resolve(__dirname, '../src/compiler'),
  core: path.resolve(__dirname, '../src/core'),
  shared: path.resolve(__dirname, '../src/shared'),
  web: path.resolve(__dirname, '../src/platforms/web'),
  weex: path.resolve(__dirname, '../src/platforms/weex'),
  server: path.resolve(__dirname, '../src/server'),
  entries: path.resolve(__dirname, '../src/entries'),
  sfc: path.resolve(__dirname, '../src/sfc')
 ```
 ## 确定入口
 ```javaScript
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
 ```
 在src/core/indtance/index.js
由上面代码可知，vue 是一个构造函数，所有创建vue实例时用的是new
👮‍为什么没用class?
📕class一般在一类里实现所有方法，而上面代码是将vue放入不同的模块去扩展，因此用class实现麻烦。这个思想可以借鉴
在src/core/index.js
```javaScript
import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'

initGlobalAPI(Vue)

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})

Vue.version = '__VERSION__'

export default Vue
```
initGlobalAPI ：初识化api
