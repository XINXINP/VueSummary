import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//设置启动生产提示
Vue.config.productionTip = false;
Vue.config.silent = true;
// 务必在加载 Vue 之后，立即同步设置以下内容
Vue.config.devtools = true;
//Vue全局配置的错误处理

// 类型：Function 默认值：undefined
Vue.config.errorHandler = function(err, vm, info) {
  console.log(err);
  console.log(vm);
  console.log(info);
  // 指定组件的渲染和观察期间未捕获错误的处理函数。这个处理函数被调用时，可获取错误信息和 Vue 实例。
};
Vue.config.warnHandler = function(msg, vm, trace) {
  // handle warn
  console.log("warn❌", msg, vm, trace);
};
//自定义键盘修饰符
Vue.config.keyCodes = {
  v: 86,
  f1: 65, //点击a自动加1
  //https://www.cnblogs.com/LinkinPark/p/5233127.html键盘按键对应的键值
  // camelCase 不可用
  mediaPlayPause: 179,
  // 取而代之的是 kebab-case 且用双引号括起来
  "media-play-pause": 179,
  up: [38, 87]
};
Vue.config.performance = true;
// 创建 Profile 实例，并挂载到一个元素上
// DOM 还没有更新
Vue.nextTick(function() {
  console.log("DOM更新了");
  // DOM 更新了
});

// 作为一个 Promise 使用 (2.1.0 起新增，详见接下来的提示)
Vue.nextTick().then(function() {
  // DOM 更新了
  console.log("DOM 更新了😊");
});
//注册一个全局指令
// 注册一个全局自定义指令 `v-focus`
// Vue.directive("demo", {
//   bind: function(el, binding, vnode) {
//     var s = JSON.stringify;
//     el.innerHTML =
//       "name: " +
//       s(binding.name) +
//       "<br>" +
//       "value: " +
//       s(binding.value) +
//       "<br>" +
//       "expression: " +
//       s(binding.expression) +
//       "<br>" +
//       "argument: " +
//       s(binding.arg) +
//       "<br>" +
//       "modifiers: " +
//       s(binding.modifiers) +
//       "<br>" +
//       "vnode keys: " +
//       Object.keys(vnode).join(", ");
//   }
// });
//Vue过滤器注册实现
Vue.filter("capitalize", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});
Vue.filter("native", function(value) {
  if (!value) return "输入为空";
  return "你输入的值" + value;
});
//
// 定义一个名为 button-counter 的新组件
Vue.component("button-counter", {
  data: function() {
    return {
      count: 0
    };
  },
  template:
    '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});
//
// 为自定义的选项 'myOption' 注入一个处理器。
Vue.mixin({
  created: function() {
    var myOption = this.$options.myOption;
    if (myOption) {
      console.log(myOption);
    }
  }
});
var version = Number(Vue.version.split(".")[0]);
if (version === 2) {
  // Vue v2.x.x
  console.log("🙇‍版本是Vue v2.x.x");
} else if (version === 1) {
  // Vue v1.x.x
  console.log("🙇版本是Vue v1.x.x");
} else {
  // Unsupported versions of Vue
  console.log("🙇版本是Unsupported versions of Vue");
}
new Vue({
  router,
  store,
  myOption: "hello",
  render: h => h(App),
  renderError(h, err) {
    return h("pre", { style: { color: "red" } }, err.stack);
  }
}).$mount("#app");
