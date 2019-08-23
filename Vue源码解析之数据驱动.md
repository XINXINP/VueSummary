Vue源码解析之数据驱动

目标：弄清楚模板和数据如何渲染成最终的 DOM。

🤔new Vue()都发生了什么？

1.调用this_init()



![1566046573218](C:\Users\px\AppData\Roaming\Typora\typora-user-images\1566046573218.png)

core/instance/init.js

![1566046697568](C:\Users\px\AppData\Roaming\Typora\typora-user-images\1566046697568.png)

uid

![1566046809421](C:\Users\px\AppData\Roaming\Typora\typora-user-images\1566046809421.png)

vm的属性扩展

initLifecycle初始化生命周期

initEvent初始化事件

![1566046907987](C:\Users\px\AppData\Roaming\Typora\typora-user-images\1566046907987.png)

el $mount

![1566046959709](C:\Users\px\AppData\Roaming\Typora\typora-user-images\1566046959709.png)

总结:调用this_init(),在core/instance/init.js中加uid,初始化各种内容，判断el,进行$mount