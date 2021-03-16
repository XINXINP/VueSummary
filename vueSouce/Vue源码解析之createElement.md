Vue源码解析之createElement

src/core/vdom/create-elemenet.js

![1566088188974](img\1566088188974.png)

内容：

![1566088335863](img\1566088335863.png)

这里根据 normalizationType 的不同，调用了 normalizeChildren(children) 和 simpleNormalizeChildren(children) 方法，将children的任意类型转换成VNode类型 

![1566088529833](img\1566088529833.png)

simpleNormalizeChildren 是模板编译，本身就是VNode模型