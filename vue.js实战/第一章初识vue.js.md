<!--
 * @Descripttion: 🐉
 * @Author: xinxin
 * @Date: 2020-03-03 10:57:39
 * @LastEditTime: 2020-03-08 12:23:57
 -->
# vue.js是什么?
# Vue的实例与数据?
new 一个Vue的构造对象得到一个Vue的实例  
- 一个Vue实例的选项：
-- el(htmlElement,css选择器 ),more实例属性和方法
-- data Vue实例的数据 （模板编译时自动双向数据绑定）
# Vue的生命周期?
```javaScript
beforeCreate
// 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
created
// 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前尚不可用。
beforeMount
mounted
beforeUpdate
updated
activated
deactivated
beforeDestroy
destroyed
errorCaptured
```
（不能使用箭头函数）
- new Vue()
- (初始化事件和生命周期)数据观察 watch event
- beforeCreate
# 全局 API
```javaScript
Vue.extend
Vue.nextTick
Vue.set
Vue.delete
Vue.directive
Vue.filter
Vue.component
Vue.use
Vue.mixin
Vue.compile
Vue.observable
Vue.version
```