# Vuex(正在整理中⛅)
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
## Vuex组成部分
- 状态管理库
- 依赖Vue本身的框架
## 使用方法
## 组成部分(正在整理中⛅)
- Actions
提交到Mutations
- states 
设置变量的key
- getter
data的计算属性
- Mutations
类似methods,更改数据，通过store.commit('key')的方法
- Module
包含以上所有属性
- 辅助函数
mapState、MapGetters、MapActions、mapMutations
## 实现机制
- 首先 vue.use(store),利用vue的插件机制，注册到vue的实例内部，然后利用vue的混入机制，在vue实例的beforeCreate周期之前注册到vue里，然后生成$store。
- Vuex的state状态是响应式，通过借助vue的数据响应式，将state存入vue实例组件的data中；Vuex的getters则是借助vue的计算属性computed实现数据实时监听。