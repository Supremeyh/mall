# mall
Vue2.0+Node.js+MongoDB  全栈打造商城系统

一、vue-cli 3
全局安装vue cli3: npm i -g @vue/cli
常见项目： vue create demo4
或者，
使用vue cli 2: npm i -g @vue/cli-init
vue init webpack demo4


二、用到的git命令
放弃本地修改，代码强制拉取更新 
git fetch --all 
git reset --hard origin/master 
git pull //可以省略


三、webpack配置
1、把所有css、js文件打包在一个js里：
/config/index中，config.build.productionSourceMap: false,
/build/webpack.prod.conf.js中，new webpack.optimize.CommonsChunkPlugin({}) 三项vendor、manifest、app都注释


