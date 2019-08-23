Vue源码分析之vdom

src/core/vdom/vnode.js

![1566087305595](C:\Users\px\AppData\Roaming\Typora\typora-user-images\1566087305595.png)

借鉴[snabbdom](https://github.com/snabbdom/snabbdom)，添加Vue.js自己的特色。

vdom 要经历create diff patch 等过程，其中create是createElement