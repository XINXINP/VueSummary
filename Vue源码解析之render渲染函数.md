Vue源码解析之render渲染函数

core/instance/render.js

![1566084405526](C:\Users\px\AppData\Roaming\Typora\typora-user-images\1566084405526.png)

vm._c----> createElement 模板渲染

vm.createElement------>createElement 手写render方法被调用

![1566085943504](C:\Users\px\AppData\Roaming\Typora\typora-user-images\1566085943504.png)

![1566086053512](C:\Users\px\AppData\Roaming\Typora\typora-user-images\1566086053512.png)



总结：判断有无render，getHandler hasHanler



