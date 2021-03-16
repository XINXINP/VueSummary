## 体验vue几个流程,实现一个简易版💘
- 数据响应式
- 依赖收集
- 模板编译
### ❓难点：watcher与dep联系建立的过程（可参考一下流程图）
## 简单的思路🤔
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3ce34eb0944b41d2817ba7ce080e04a8~tplv-k3u1fbpfcp-watermark.image)
## 实现的过程（在自己的编辑器里看效果好）🔬
### 测试文件(自己建一个index.html）📜
````html
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<div id="app">
  <p @click="onclick">{{counter}}</p>
  <p p-text="counter"></p>
  <p p-html="desc"></p>
  <input type="text" p-model="desc">
</div>
<!-- 引入测试内容 -->
<script src="./pvue.js"></script>
<script>
  const app = new PVue({
    el: '#app',
    data: {
      counter: 1,
      desc: '<p>你好<span style="color: blue">世界</span></p>'
    },
  })
  setInterval(() => {
    app.counter++
  }, 1000);
</script>
````
[结果演示地址](https://www.bilibili.com/video/BV1yZ4y1A7pj)📺
### js代码实现部分展示(自己再建一个pvue.js)📜
````javaScript
function defineReactive(obj, key, val) {
    //递归处理
    observe(val)

    const dep = new Dep()

    Object.defineProperty(obj, key, {
        get() {
            console.log("get", key);
            //判断Dep.target是否存在
            Dep.target && dep.addDep(Dep.target)
            return val
        },
        set(v) {
            if (v !== val) {
                console.log("set", key, v);
                val = v;
                dep.notify()
            }
        }
    })
}
// 数据响应式，遍历每个key,对其执行defineReactive
function observe(obj) {
    // data遍历设置为响应式数据
    if (typeof obj !== "object" || obj === null) {
        return
    }
    new Observer(obj)
}
//依赖收集
class Observer {
    constructor(obj) {
        this.value = obj
        if (Array.isArray(obj)) { } else {
            this.walk(obj)
        }
    }
    walk(obj) {
        Object.keys(obj).forEach((key) => {
            defineReactive(obj, key, obj[key])
        })
    }
}
//代理 将$data的key代理vm到上去,用户可以直接使用
function proxy(vm) {
    Object.keys(vm.$data).forEach((key) => {
        Object.defineProperty(vm, key, {
            get() {
                return vm.$data[key]
            },
            set(v) {
                vm.$data[key] = v
            }
        })
    })
}
class PVue {
    constructor(options) {
        //获取实例的数据
        this.$options = options
        this.$data = options.data
        //响应
        observe(this.$data)
        // 代理
        proxy(this)
        // 编译
        new Compile(options.el, this)
    }
}
class Compile {
    constructor(el, vm) {
        this.$vm = vm
        this.$el = document.querySelector(el)
        // 简易模版编译
        this.compile(this.$el)
    }
    compile(el) {
        // 遍历node元素
        el.childNodes.forEach(node => {
            //1.元素
            if (node.nodeType === 1) {
                this.compileElement(node)
                //递归
                if (node.childNodes.length > 0) {
                    this.compile(node)
                }
            } else if (this.isInter(node)) {
                this.compileText(node)
            }
        })
    }
    isInter(node) {
        console.warn(); ('检测插值语法');
        return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
    }
    isDir(attrName) {
        console.warn('检测元素标签');
        return attrName.startsWith('p-')
    }
    //update: 给传入的node做初始化并创建watcher 负责其更新
    update(node, exp, dir) {
        const fn = this[dir + "Updater"]
        //初始化
        fn && fn(node, this.$vm[exp])
        //创建watcher实例
        new Watcher(this.$vm, exp, function (val) {
            fn && fn(node, val)
        })
    }

    text(node, exp) {
        this.update(node, exp, 'text')
    }
    textUpdater(node, val) {
        node.textContent = val
    }
    html(node, exp) {
        this.update(node, exp, 'html')
    }
    htmlUpdater(node, val) {
        node.innerHTML = val
    }
    // 插值文本编译 {{}}
    compileText(node) {
        this.update(node, RegExp.$1, 'text')
    }
    // 编译元素
    compileElement(node) {
        //获取节点特性
        const nodeAttrs = node.attributes
        Array.from(nodeAttrs).forEach(attr => {
            const attrName = attr.name
            const exp = attr.value
            //判断是否是
            if (this.isDir(attrName)) {
                const dir = attrName.substring(2)
                this[dir] && this[dir](node, exp)
            }

        })
    }
}
class Watcher {
    constructor(vm,key,updateFn){
        this.vm = vm
        this.key = key
        this.updateFn = updateFn

        Dep.target = this
        // 获取一下key的值触发它的get方法，在那创建当前watcher实例和dep之间关系
        this.vm[this.key]
        Dep.target = null
    }
    update(){
        this.updateFn.call(this.vm,this.vm[this.key])
    }
}
class Dep {
    constructor() {
        this.deps = []
    }
    addDep(dep) {
        this.deps.push(dep)
    }
    notify() {
        this.deps.forEach(dep => dep.update())
    }
}
````
### [【推荐一下自己的博客 】](http://blog.pxbtf.com)