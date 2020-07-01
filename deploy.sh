###
 # @Descripttion: 🐉代码命令提交
 # @Author: xinxin
 # @Date: 2020-06-15 20:22:24
 # @LastEditTime: 2020-07-01 09:04:07
### 
#!/usr/bin/env sh
# 提交文件
git add .

git commit -m 'deploy'

# 如果你想要部署到 https://<USERNAME>.github.io
git push -f git@github.com:XINXINP/VueSummary master


