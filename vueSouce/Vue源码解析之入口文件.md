Vue源码解析之入口文件

根据package.json找到入口文件

/entry-runtime-with-compiler.js![img](file:///C:\Users\px\AppData\Local\Temp\ksohtml7208\wps1.jpg)

Runtime/index.js

![img](file:///C:\Users\px\AppData\Local\Temp\ksohtml7208\wps2.jpg) 

 

core/index.js

![img](file:///C:\Users\px\AppData\Local\Temp\ksohtml7208\wps3.jpg) 

初始化全局变量

![img](file:///C:\Users\px\AppData\Local\Temp\ksohtml7208\wps4.jpg) 

Core/instance/index.js

![img](file:///C:\Users\px\AppData\Local\Temp\ksohtml7208\wps5.jpg) 

Vue 构造函数

![1566044170275](img\1566044170275.png)

 给Vue.property扩展一些方法

![1566044356830](img\1566044356830.png)

提示：Vue 不使用class类，而是将这些扩展分散到模块中，便于管理

/core/globel-api/index.js

![1566044983243](img\1566044983243.png)

extend nextTick mergeOptions defineReactive

Vue.util暴露的方法最好不要依赖，因为它经常发生变化 ，是不稳定的。

![1566045236513](img\1566045236513.png)

