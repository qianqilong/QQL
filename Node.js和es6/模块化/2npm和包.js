// 1.node.js的第三方模块又叫做包
// 2.node.js都是免费开源的，用包提高开发效率

// 3.下载包
// npm install 包的完整名(简写 npm i)

// 4.共享时剔除包上传
// 快速创建npm init -y package.json(项目名称不可以包含中文和空格)

// (1)dependencies 记录安装了哪些包
// npm i 会一次读取dependencies所有节点并安装所有的包

// (2)卸载包 npm uninstall 来卸载指定的包(没有简写)卸载后dependencies中记录的包会自动被删除

// (3)devDependencies节点只在开发阶段用记录到这里npm i -D 包名
// 开发和上线都用dependencies节点中

// (4)淘宝镜像服务器下包
// 切换下包镜像源
// (4.1)npm config get registry 获取下包的地址\
//(4.2)npm config set registry=https://registry.npm.taobao.org/

// (5)安装nrm工具npm i nrm -g
// (5.1)nrm ls查看可用的镜像源
// (5.2)nrm use taobao 切换淘宝服务器
