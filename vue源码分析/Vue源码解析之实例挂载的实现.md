Vue源码解析之实例挂载的实现

src/platform/web/entry-runtime-with-compiler.js 

![1566047848715](img\1566047848715.png)

body html 排除

![1566047903340](img\1566047903340.png)

判断render

![1566047966317](img\1566047966317.png)

![1566048089244](img\1566048089244.png)

调用compileToFunction

![1566048572148](img\1566048572148.png)

core/instance/lifecycle.js

![1566048698741](img\1566048698741.png)

![1566048765238](img\1566048765238.png)