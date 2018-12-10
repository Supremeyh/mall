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


五、服务器搭建 mongodb
1、下载
2、上传至服务器  
scp  ./mongodb.tar.gz  root@127.0.0.1:/   (/表示根目录， 若传文件夹 -r )
3、解压，重命名 为mongodb
4、创建数据、日志、配置的目录和文件 
mkdir /mongodb/data、 /mongodb/logs 、 /mongodb/etc
touch mongo.log
vi mongo.conf
5、配置 mongo.conf:
dbpath = /mongodb/data
logpath = /mongodb/logs/mongod.log
logappend = true  (日志追加级别，不覆盖)
journal = true
quiet = true  (调试false)
port = 27017

6、启动 mongodb
cd mongodb/bin 
mongod -f  /mongodb/etc/mongo.conf

7、创建软链接
ln -s  /mongodb/bin/mongo  /usr/bin/mongo
ln -s  /mongodb/bin/mongod  /usr/bin/mongod

8、操作数据库
show dbs  
use test
db.gods.insert((id: 1, name: 'god1'))
db.gods.find()


六、mac 使用 brew 安装配置mongodb
1、查看是否安装
brew list , 或者 brew search mongodb, 或者 which mongod

2、安装
brew install mongodb

3、常见错误
1> 有一个进程已经在端口中运行  Failed to set up listener: SocketException: Address already in use：
lsof -i :27017    kill -9 407   杀死进程  
mongod -p 27018  指定其他端口
2>

4、启动
mongod --config /usr/local/etc/mongod.conf  非授权方式进入
打开新window: mongo 
show dbs
切换admin
use admin
创建账号， 创建管理员
db.createUser({user:'admin',pwd:'admin',roles:['root]})   
db.auth('admin, 'admin')   授权认证

切换test
use test
创建账号， 给使用的数据库添加用户
db.createUser({user:'root',pwd:'12345',roles:[{role:'dbOwner',db:'test'}]})

再次启动
mongod --config /usr/local/etc/mongod.conf  --auth   授权方式进入
使用GUI， 如MongoHub 输入密码连接test 数据库


七、 mongodb 常见语法
nosql
1、对比SQL
sql                 mongodb          解释/说明
database           database          数据库
table              collection       数据库表/集合
row                docuemnt         数据记录行/文档
column             filed             数据字段/域
index              index              索引
table joins                       表连接/mongodb不支持
primary key       primary key     主键，mongodb自动将_id字段设置为主键

2、基本语法
mongod  -f /usr/local/etc/mongod.conf    非授权方式 启动数据库
打开新window: mongo 
show dbs  查看数据库
use test  创建数据库
db.createCollection('user') , 或者 db.users.insert({id: 123, name: 'zhao'})    创建集合
show collections 
db.dropDatabase()    删除数据库
db.user.drop()    删除集合

db.user.insert({id: 1, name: 'zhao', age: 20, class: {name: 'gh', num: 32}})   新增数据

db.user.find()    查询数据
db.user.find().pretty()     查询数据，且格式化
db.user.findOne()   查询第一条数据
db.user.find({name: 'zhao'})   查询子文档
db.user.find({'class.name': 'gh'})   查询子文档
db.user.find({age: {$gte: 20}})   查询  条件符

db.user.update({name: 'qian'}, {$set: {age: 21}})   修改数据
db.user.update({name: 'qian'}, {$set: {'class.name': 'tc'}})    修改数据

db.user.remove({ id: 1 })   删除


mongoimport  -d  test  -c user  --file  /path/file    导入数据



八、node启动与调试
pm2 start app.js  启动
pm2 list  查看已启动进程
pm2 monit   监控进程
pm2 logs 日志
pm2 stop  <app_name|id|'all'|json_conf>  停止



```