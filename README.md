# mall
Vue2.0+Node.js+MongoDB  全栈打造商城系统

一、vue-cli 3
```
全局安装vue cli3: npm i -g @vue/cli
常见项目： vue create demo3
或者，
使用vue cli 2: npm i -g @vue/cli-init
vue init webpack demo3


二、用到的git命令
放弃本地修改，代码强制拉取更新 
git fetch --all 
git reset --hard origin/master 
git pull //可以省略


三、webpack配置
1、把所有css、js文件打包在一个js里：
/config/index中，config.build.productionSourceMap: false,
/build/webpack.prod.conf.js中，new webpack.optimize.CommonsChunkPlugin({}) 三项vendor、manifest、app都注释

2、省略引用文件时名字后缀与路径
后缀省略webpack.base.conf.js中，extensions: ['.js', '.vue', '.json'],
路径依赖alias: { 'vue$': 'vue/dist/vue.esm.js', '@': resolve('src') }


四、搭建基于expres框架的运行环境
1、Express 应用程序生成器
  npm install express-generator -g

2、查看 Express 版本
  express --version

3、创建了一个名称为 server 的 Express 应用
express server

4、安装所有依赖包
  cd myapp
  npm install

5、启动应用
npm start

6、浏览器中打开 http://localhost:3000/ 

7、使用html, 不使用jade模板  app.js
// app.set('view engine', 'jade');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

```