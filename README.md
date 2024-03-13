## 概述

使用vue全家桶构建，打包工具webpack3。包含用于分享的动态、话题、用户主页、商品详情、资讯详情、知识详情单页。

网络插件axios 文档：https://www.kancloud.cn/yunye/axios/234845

## 本地部署指南

1、是用git clone 克隆代码仓库

2、是用VSCode打开项目，执行 npm install 安装依赖包

如果网络访问npm包比较慢 ,配置淘宝镜像

npm config set registry https://registry.npm.taobao.org
命令区分
npm install -g cnpm --registry=https://registry.npm.taobao.org

3、修改本地host

local.js 以及pord.js中的createServerConfig中的api地址

4、编译代码

npm run build

5、设置软链接

把生成的plus-t3-h5/ThinkSNS文件夹软链接到本地项目服务器的public内并且名称为h5

`ln -s x'x/Ts3-H5-源码/ThinkSNS xx/ts/public/h5`

6、本地开发运行
npm run start

成功后自动打开一个ip地址的网址，重新输入本地服务器地址/h5/#/模块?id=xx

例如动态详情：

`http://ts.cn/h5/#/imgText?id=35`

默认地址：`本地服务器地址/h5/#/模块?id=xx`

```
资讯详情：consultation
商品详情：commodity
知识/章节详情：knowledge
活动详情：activity
用户主页：users
动态详情：imgText
话题详情：theme
```



## 结构说明

App：入口目录
		Assets:存放资源目录，css、font、image及JS 文件

		Components: 组件目录
	
		Config：公共配置目录
	
		router：静态页面访问路径配置
	
		store：vuex状态管理目录，
	
		view：page页面存放



Config：工作环境配置
		local.js 是作为当前运行环境的基础配置项

​		.gitignore: 记录忽略提交到git的目录与文件名





